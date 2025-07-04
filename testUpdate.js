const mongoose = require("mongoose");
const dotenv = require("dotenv");
const updateExpiredTransactions = require("./utils/updateTransactionStatus");

dotenv.config(); // nếu dùng .env để chứa DB connection

const connectAndRun = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ MongoDB connected");

    await updateExpiredTransactions(); // 🧠 Gọi hàm cập nhật

    mongoose.connection.close(); // đóng kết nối sau khi xong
  } catch (err) {
    console.error("❌ Error:", err);
  }
};

connectAndRun();
