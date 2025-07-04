const Transaction = require("../models/Transaction");

const transactionData = [
  {
    user: "john_doe",
    hotel: "6311a54a4a642f0142349086", // HANOI ROYAL PALACE HOTEL 2
    room: [
      {
        roomId: "6310dd998cfecfd90b30ca28", // 2 Bed Room
        number: 101,
      },
    ],
    dateStart: new Date("2025-06-25"),
    dateEnd: new Date("2025-06-28"),
    price: 600,
    payment: "Credit Card",
    status: "Booked",
  },
  {
    user: "jane_smith",
    hotel: "6311a9c64a642f01423490bf", // La Sinfonia del Rey
    room: [
      {
        roomId: "6310e01a8cfecfd90b30ca30",
        number: 202,
      },
      {
        roomId: "6311b2a24a642f01423490d6",
        number: 102,
      },
    ],
    dateStart: new Date("2025-07-01"),
    dateEnd: new Date("2025-07-04"),
    price: 1350,
    payment: "Cash",
    status: "Booked",
  },
  {
    user: "alex_nguyen",
    hotel: "6311bd07f2fce6ea18172fa3", // May De Ville Legend
    room: [
      {
        roomId: "6311be30f2fce6ea18172fa8",
        number: 101,
      },
    ],
    dateStart: new Date("2025-06-22"),
    dateEnd: new Date("2025-06-26"),
    price: 1200,
    payment: "Credit Card",
    status: "Checkin",
  },

  {
    user: "vo_ngan",
    hotel: "6311a54a4a642f0142349086",
    room: [
      {
        roomId: "6310dd998cfecfd90b30ca28",
        number: 101,
      },
    ],
    dateStart: new Date("2025-07-01"),
    dateEnd: new Date("2025-07-03"),
    price: 300,
    payment: "Credit Card",
    status: "Checkin",
  },
];

const seedTransaction = async () => {
  try {
    await Transaction.deleteMany();
    await Transaction.insertMany(transactionData);
    console.log("Seeding transaction successful");
  } catch (error) {
    console.error("Seeding transaction failed - ", error);
  }
};

module.exports = seedTransaction;
