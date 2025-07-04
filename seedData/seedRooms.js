const dotenv = require("dotenv");
const Room = require("../models/Room");

const roomData = [
  {
    _id: "6310dd998cfecfd90b30ca28",
    title: "2 Bed Room",
    price: 200,
    maxPeople: 3,
    desc: "King size bed",
    roomNumbers: [101, 102],
    createdAt: new Date("2022-09-01T16:28:09.506Z"),
    updatedAt: new Date("2022-09-02T06:43:27.616Z"),
  },
  {
    _id: "6310e01a8cfecfd90b30ca30",
    title: "1 Bed Room",
    price: 150,
    maxPeople: 2,
    desc: "1 Bathroom",
    roomNumbers: [202],
    createdAt: new Date("2022-09-01T16:38:50.351Z"),
    updatedAt: new Date("2022-09-01T16:38:50.351Z"),
  },
  {
    _id: "6311b2a24a642f01423490d6",
    title: "Basement Double Room",
    price: 600,
    maxPeople: 2,
    desc: "Welcome drink, Coffee & tea, Express check-in, Free Premium Wifi, Free WiFi, Drinking water",
    roomNumbers: [101, 102],
    createdAt: new Date("2022-09-02T07:37:06.178Z"),
    updatedAt: new Date("2022-09-02T07:37:06.178Z"),
  },
  {
    _id: "6311b3944a642f01423490df",
    title: "Superior basement room",
    price: 700,
    maxPeople: 2,
    desc: "Free breakfast for 2",
    roomNumbers: [202, 203, 205],
    createdAt: new Date("2022-09-02T07:41:08.213Z"),
    updatedAt: new Date("2022-09-02T07:41:08.213Z"),
  },
  {
    _id: "6311b47b4a642f01423490f4",
    title: "Deluxe Room",
    price: 700,
    maxPeople: 2,
    desc: "Welcome drink, Coffee & tea, Express check-in, Free Premium Wifi, Free WiFi, Drinking water",
    roomNumbers: [303, 403, 404],
    createdAt: new Date("2022-09-02T07:44:59.829Z"),
    updatedAt: new Date("2022-09-02T07:44:59.829Z"),
  },
  {
    _id: "6311be30f2fce6ea18172fa8",
    title: "Deluxe Window",
    price: 300,
    maxPeople: 2,
    desc: "Welcome drink, Coffee & tea, Express check-in, Free WiFi, Drinking water, Free fitness center access",
    roomNumbers: [101, 102],
    createdAt: new Date("2022-09-02T08:26:24.542Z"),
    updatedAt: new Date("2022-09-02T08:26:24.542Z"),
  },
  {
    _id: "6311be52f2fce6ea18172faf",
    title: "Premier City View Room",
    price: 425,
    maxPeople: 2,
    desc: "Extra low price! (non-refundable)",
    roomNumbers: [202, 203, 205],
    createdAt: new Date("2022-09-02T08:26:58.319Z"),
    updatedAt: new Date("2022-09-02T08:26:58.319Z"),
  },
  {
    _id: "6311c083f2fce6ea18172fba",
    title: "Budget Double Room",
    price: 350,
    maxPeople: 2,
    desc: "Pay nothing until September 04, 2022",
    roomNumbers: [101, 102],
    createdAt: new Date("2022-09-02T08:36:19.990Z"),
    updatedAt: new Date("2022-09-02T08:36:19.990Z"),
  },
  {
    _id: "6311c0a8f2fce6ea18172fc3",
    title: "Budget Twin Room",
    price: 350,
    maxPeople: 2,
    desc: "Free cancellation before September 06, 2022",
    roomNumbers: [202, 203, 205],
    createdAt: new Date("2022-09-02T08:36:56.388Z"),
    updatedAt: new Date("2022-09-02T08:36:56.388Z"),
  },
  {
    _id: "6650ab9987654321abcdef12",
    title: "Deluxe King Room",
    price: 180,
    maxPeople: 2,
    desc: "Spacious room with king-sized bed and city view",
    roomNumbers: [301, 302, 303],
  },
  {
    _id: "6650ab2234567890abcdef22",
    title: "Cozy Beach View Room",
    price: 100,
    maxPeople: 2,
    desc: "Cozy room with sea breeze and natural light",
    roomNumbers: [101, 102],
  },
];

dotenv.config();

const seedRoom = async () => {
  try {
    await Room.deleteMany();
    await Room.insertMany(roomData);

    console.log("Seeding room successful");
    
  } catch (error) {
    console.error("Seeding room failed - ", error);
   
  }
};

module.exports = seedRoom;
