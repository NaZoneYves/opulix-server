const mongoose = require("mongoose");
const Room = require("../models/Room");

const HotelSchema = new mongoose.Schema({
  rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room" }],
  name: String,
  type: String,
  city: String,
  address: String,
  distance: String,
  photos: [String], //List of Cloudinary image URLs
  desc: String,
  cheapestPrice: Number,
  rating: Number,
  featured: Boolean,
});

module.exports = mongoose.model("Hotel", HotelSchema);
