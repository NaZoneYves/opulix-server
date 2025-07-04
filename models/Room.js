const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  title: String,
  price: Number,
  maxPeople: Number,
  desc: String,
  roomNumbers: [{type: Number}],
});

module.exports = mongoose.model("Room", RoomSchema);
