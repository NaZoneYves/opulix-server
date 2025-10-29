// routes/room.route.js
const express = require("express");
const router = express.Router();
const roomController = require("../controllers/room.controller");
const { authenticate, authorizeRoles } = require("../middlewares/auth");

router.get(
  "/hotels/:hotelId/available-rooms",
  roomController.getAvailableRooms
);
router.get("/", roomController.getAllRooms);
router.post(
  "/",
  authenticate,
  authorizeRoles("admin"),
  roomController.createRoom
);
router.put(
  "/:id",
  authenticate,
  authorizeRoles("admin"),
  roomController.updateRoom
);
router.delete(
  "/:roomId",
  authenticate,
  authorizeRoles("admin"),
  roomController.deleteRoom
);

module.exports = router;
