const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const hotelRoutes = require("./routes/hotel.route");
const transactionRoute = require("./routes/transaction.route");
const uploadRoutes = require("./routes/upload.route");
const startCronJobs = require("./cron/schedule");

const router = express.Router();
const cloudinary = require("./utils/cloudinary");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/rooms", require("./routes/room.route"));
app.use("/api/hotels", hotelRoutes);
app.use("/api/transactions", transactionRoute);
app.use("/api/upload", uploadRoutes);

// GET /api/images/hotels - Lấy ảnh của tất cả khách sạn
// // ✅ GỘP API LẤY ẢNH KHÁCH SẠN Ở ĐÂY
// app.get("/api/images/hotels", async (req, res) => {
//   try {
//     const folders = [
//       "hotel_1",
//       "hotel_2",
//       "hotel_3",
//       "hotel_4",
//       "hotel_5",
//       "hotel_6",
//     ];
//     const allResults = {};

//     for (const folder of folders) {
//       const result = await cloudinary.search
//         .expression(`folder:opulix_hotels/${folder}`)
//         .sort_by("public_id", "asc")
//         .max_results(30)
//         .execute();

//       allResults[folder] = result.resources.map((img) => img.secure_url);
//     }

//     res.status(200).json({
//       message: "Fetched hotel images successfully",
//       data: allResults,
//     });
//   } catch (err) {
//     console.error("Cloudinary fetch error:", err);
//     res.status(500).json({
//       message: "Failed to fetch hotel images",
//       error: err.message,
//     });
//   }
// });

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
  // startCronJobs();
});
