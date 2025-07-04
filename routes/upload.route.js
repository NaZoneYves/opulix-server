const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const uploadController = require("../controllers/upload.controller");

// Lưu ảnh tạm trong thư mục uploads/ trước khi upload lên Cloudinary
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post(
  "/hotel-images",
  upload.array("images", 10),
  uploadController.uploadHotelImages
);

module.exports = router;
