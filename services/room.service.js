const dayjs = require("dayjs");
const Room = require("../models/Room");
const Hotel = require("../models/Hotel");
const Transaction = require("../models/Transaction");

exports.getAvailableRooms = async (
  hotelId,
  data_dateStart,
  data_dateEnd,
  people
) => {
  const startDate = dayjs(data_dateStart).startOf("day");
  let endDate = dayjs(data_dateEnd).startOf("day");

  if (endDate.isSame(startDate)) {
    endDate = endDate.add(1, "day");
  }

  if (!startDate.isValid() || !endDate.isValid()) {
    throw new Error("Invalid date format. Use YYYY-MM-DD or ISO string.");
  }

  const hotel = await Hotel.findById(hotelId).populate("rooms");
  if (!hotel) throw new Error("Hotel not found");

  const bookedMap = new Map();

  const transactions = await Transaction.find({
    hotel: hotelId,
    status: { $in: ["Booked", "Checkin"] },
    dateStart: { $lt: endDate.toDate() },
    dateEnd: { $gt: startDate.toDate() },
  });

  transactions.forEach((tr) => {
    tr.room.forEach(({ roomId, number }) => {
      const id = roomId?.toString();
      if (!bookedMap.has(id)) bookedMap.set(id, new Set());
      bookedMap.get(id).add(number);
    });
  });

  // Lọc phòng còn trống
  const availableRooms = hotel.rooms
    .map((room) => {
      const roomIdStr = room._id.toString();
      const bookedSet = bookedMap.get(roomIdStr) || new Set();

      const availableNumbers = Array.isArray(room.roomNumbers)
        ? room.roomNumbers.filter((num) => !bookedSet.has(num))
        : [];

      if (availableNumbers.length === 0) return null;
      if (people && room.maxPeople < people) return null;

      return {
        _id: room._id,
        title: room.title,
        desc: room.desc,
        price: room.price,
        maxPeople: room.maxPeople,
        roomNumbers: availableNumbers,
      };
    })
    .filter((r) => r);

  return availableRooms;
};

exports.createRoom = async (data) => {
  const room = new Room(data);
  const savedRoom = await room.save();
  return savedRoom;
};

exports.getAllRooms = async () => {
  return await Room.find();
};

exports.updateRoom = async (id, data) => {
  return await Room.findByIdAndUpdate(
    id,
    {
      $set: {
        title: data.title,
        price: data.price,
        maxPeople: data.maxPeople,
        desc: data.desc,
        roomNumbers: data.roomNumbers, // Ghi đè hoàn toàn mảng
      },
    },
    { new: true }
  );
};

exports.deleteRoom = async (roomId) => {
  await Hotel.updateMany(
    {
      rooms: roomId,
    },
    { $pull: { rooms: roomId } }
  );

  return await Room.findByIdAndDelete(roomId);
};
