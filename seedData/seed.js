const mongoose = require("mongoose");
const seedHotel = require("./seedHotels");
const seedRoom = require("./seedRooms");
const seedTransaction = require("./seedTransaction")

const connectDB = require("../config/db");

async function seedAll() {
  try {
    await connectDB();

    await seedRoom();
    await seedHotel();
    await seedTransaction();

    console.log("Seeding all successful");
    process.exit();
  } catch (error) {
    console.error("Seeding all failed - ", error);
    process.exit(1);
  }
}

seedAll();
