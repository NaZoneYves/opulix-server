const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./config/db");
const hotelRoutes = require("./routes/hotel.route");
const transactionRoute = require("./routes/transaction.route");
const uploadRoutes = require("./routes/upload.route");
const userRoutes = require("./routes/user.route"); // ✅ thêm route user
const limiter = require("./middlewares/rateLimit"); // ✅ thêm dòng này
const errorHandler = require("./middlewares/errorHandler"); // ✅ thêm dòng này
const startBackup = require("./cron/backup");
const startCronJobs = require("./cron/schedule");
const cloudinary = require("./utils/cloudinary");

dotenv.config();
connectDB();

const app = express();

// 🧩 1️⃣ Thêm Helmet để bảo vệ header HTTP
app.use(helmet());

// 🧩 2️⃣ Cấu hình CORS chỉ cho phép frontend hợp lệ gọi API
app.use(
  cors({
    origin: ["http://localhost:3000"], // ⚠️ thay bằng domain FE thật của bạn
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// 🧩 3️⃣ Thêm log để theo dõi request (dễ audit sau này)
app.use(morgan("tiny"));
app.use(limiter); // ✅ Giới hạn request toàn hệ thống

// 🧩 4️⃣ Middleware để parse JSON
app.use(express.json());

// 🧩 5️⃣ Định nghĩa các route chính
app.use("/api/users", userRoutes); // ✅ route user có bảo mật JWT
app.use("/api/auth", require("./routes/user.route"));
app.use("/api/rooms", require("./routes/room.route"));
app.use("/api/hotels", hotelRoutes);
app.use("/api/transactions", transactionRoute);
app.use("/api/upload", uploadRoutes);

// 🧩 6️⃣ Middleware xử lý lỗi cuối cùng (ẩn lỗi nhạy cảm)
// app.use((err, req, res, next) => {
//   console.error("❌ Error:", err.stack);
//   res.status(500).json({ message: "Internal server error" });
// });

// ✅ Global error handler (đặt sau routes)
app.use(errorHandler);

// 🧩 7️⃣ Khởi động server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);

  startBackup();
  // startCronJobs();
});
