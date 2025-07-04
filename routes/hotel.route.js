const express = require("express");
const router = express.Router();
const hotelController = require("../controllers/hotel.controller");
const { authenticate, authorizeRoles } = require("../middlewares/auth");

//Get all hotels
router.get("/", hotelController.getAllHotels);
router.get("/:id", hotelController.getHotelById);
router.post(
  "/",
  authenticate,
  authorizeRoles("admin"),
  hotelController.createHotel
);
router.put(
  "/:id",
  authenticate,
  authorizeRoles("admin"),
  hotelController.updateHotel
);
router.delete(
  "/:id",
  authenticate,
  authorizeRoles("admin"),
  hotelController.deleteHotel
);

module.exports = router;
