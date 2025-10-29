const mongoose = require("mongoose");
const dotenv = require("dotenv");
const updateExpiredTransactions = require("./utils/updateTransactionStatus");

dotenv.config(); // nếu dùng .env để chứa DB connection

const connectAndRun = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");

    await updateExpiredTransactions();

    mongoose.connection.close();
  } catch (err) {
    console.error("Error:", err);
  }
};

connectAndRun();
