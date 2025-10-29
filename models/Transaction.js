const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
  {
    // List of booked rooms
    room: [
      {
        roomId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Room",
          required: true,
        },
        number: {
          type: Number,
          required: true,
        },
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
      required: true,
    },

    dateStart: {
      type: Date,
      required: true,
    },
    dateEnd: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    payment: {
      type: String,
      enum: ["Credit Card", "Cash"],
      default: "Credit Card",
    },
    status: {
      type: String,
      enum: ["Booked", "Checkin", "Checkout"],
      default: "Booked",
    },

    // 🧠 Thêm trường integrityHash để bảo đảm tính toàn vẹn
    integrityHash: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", TransactionSchema);
