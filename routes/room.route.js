// routes/room.route.js
const express = require("express");
const router = express.Router();
const roomController = require("../controllers/room.controller");

router.get(
  "/hotels/:hotelId/available-rooms",
  roomController.getAvailableRooms
);
router.get("/", roomController.getAllRooms);
router.post("/", roomController.createRoom);
router.put("/:id", roomController.updateRoom);
router.delete("/:roomId", roomController.deleteRoom);

module.exports = router;
