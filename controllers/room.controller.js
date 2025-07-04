// controllers/room.controller.js
const roomService = require("../services/room.service");

exports.getAvailableRooms = async (req, res) => {
  try {
    const { hotelId } = req.params;
    const { dateStart, dateEnd, people } = req.query;

    const rooms = await roomService.getAvailableRooms(
      hotelId,
      dateStart,
      dateEnd,
      people ? parseInt(people) : undefined
    );

    res.json(rooms);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: err.message || "Server error" });
  }
};

exports.createRoom = async (req, res) => {
  try {
    const { hotelId, ...roomData } = req.body;

    const room = await roomService.createRoom(roomData, hotelId);
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await roomService.getAllRooms();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateRoom = async (req, res) => {
  try {
    const room = await roomService.updateRoom(req.params.id, req.body);
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteRoom = async (req, res) => {
  try {
    await roomService.deleteRoom(req.params.roomId);
    res.status(200).json({ message: "Room deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// const roomService = require("../services/room.service");

// exports.createRoom = async (req, res) => {
//   try {
//     const room = await roomService.createRoom(req.params.hotelId, req.body);
//     res.status(201).json(room);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// exports.getAllRooms = async (req, res) => {
//   try {
//     const rooms = await roomService.getAllRooms();
//     res.status(200).json(rooms);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// exports.getRoom = async (req, res) => {
//   try {
//     const room = await roomService.getRoomById(req.params.id);
//     res.status(200).json(room);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// exports.updateRoom = async (req, res) => {
//   try {
//     const room = await roomService.updateRoom(req.params.id, req.body);
//     res.status(200).json(room);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// exports.deleteRoom = async (req, res) => {
//   try {
//     await roomService.deleteRoom(req.params.hotelId, req.params.roomId);
//     res.status(200).json({ message: "Room deleted" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
