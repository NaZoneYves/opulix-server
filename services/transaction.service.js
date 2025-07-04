const mongoose = require("mongoose");
const Transaction = require("../models/Transaction");

const Room = require("../models/Room");

exports.createTransaction = async (data) => {
  const { room, dateStart, dateEnd, user, hotel, price, payment } = data;

  //Kiểm tra trùng ngày
  for (let r of room) {
    const existing = await Transaction.findOne({
      "room.roomId": r.roomId,
      "room.number": r.number, // ✅ sửa ở đây
      $or: [
        {
          dateStart: { $lt: new Date(dateEnd) },
          dateEnd: { $gt: new Date(dateStart) },
        },
      ],
    });

    if (existing) {
      throw new Error(`Room ${r.number} is booked in this time`);
    }
  }
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
  });
  await transaction.save();
  return transaction;
};

exports.getTransactionByUser = async (userId) => {
  const transactions = await Transaction.find({ user: userId })
    .populate("hotel")
    .populate("room.roomId")
    .sort({ createdAt: -1 });

  return transactions;
};
