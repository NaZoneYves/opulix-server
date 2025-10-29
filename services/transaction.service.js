const mongoose = require("mongoose");
const crypto = require("crypto");
const Transaction = require("../models/Transaction");
const Room = require("../models/Room");
const AuditLog = require("../models/AuditLog");

exports.createTransaction = async (data) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { room, dateStart, dateEnd, user, hotel, price, payment } = data;

    // ✅ 1. Kiểm tra trùng phòng trong cùng thời gian
    for (let r of room) {
      const existing = await Transaction.findOne({
        "room.roomId": r.roomId,
        "room.number": r.number,
        $or: [
          {
            dateStart: { $lt: new Date(dateEnd) },
            dateEnd: { $gt: new Date(dateStart) },
          },
        ],
      }).session(session);

      if (existing) {
        throw new Error(`❌ Room ${r.number} is already booked in this time.`);
      }
    }

    // ✅ 2. Hash dữ liệu quan trọng (giá + trạng thái)
    const hash = crypto
      .createHash("sha256")
      .update(price.toString() + payment)
      .digest("hex");

    // ✅ 3. Tạo transaction mới
    const transaction = new Transaction({
      user: new mongoose.Types.ObjectId(user),
      hotel: new mongoose.Types.ObjectId(hotel),
      room: room.map((r) => ({
        roomId: new mongoose.Types.ObjectId(r.roomId),
        number: r.number,
      })),
      dateStart,
      dateEnd,
      price,
      payment,
      integrityHash: hash, // lưu lại checksum
    });

    await transaction.save({ session });

    // Giả lập lỗi giữa chừng
    // throw new Error("💥 Fake DB error before commit");

    // ✅ 4. Audit Log
    await AuditLog.create(
      [
        {
          userId: user,
          action: "create",
          target: "transaction",
          targetId: transaction._id,
          changes: { hotel, price, payment },
        },
      ],
      { session }
    );

    // ✅ 5. Commit nếu không lỗi
    await session.commitTransaction();
    session.endSession();

    return transaction;
  } catch (error) {
    // ✅ Rollback khi lỗi
    await session.abortTransaction();
    session.endSession();

    console.error("Transaction failed:", error.message);
    throw new Error("Booking failed: " + error.message);
  }
};

exports.getAllTransactions = async () => {
  return await Transaction.find()
    .populate("user", "username")
    .populate("hotel", "name")
    .populate("room.roomId", "title");
};

exports.getTransactionByUser = async (userId) => {
  return await Transaction.find({ user: userId })
    .populate("hotel", "name")
    .populate("room.roomId", "title")
    .sort({ createdAt: -1 });
};

exports.countTransactions = async () => {
  return await Transaction.countDocuments();
};
