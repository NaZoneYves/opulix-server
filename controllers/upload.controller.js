const uploadService = require("../services/upload.service");

exports.uploadHotelImages = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No files uploaded." });
    }

    const hotelFolderName = req.query.hotel; // hoặc req.body.hotel
    if (!hotelFolderName) {
      return res.status(400).json({ message: "Missing hotel folder name." });
    }

    const urls = await uploadService.uploadImages(req.files, hotelFolderName);
    res.status(200).json({ message: "Upload successful", urls });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ message: "Upload failed", error: err.message });
  }
};
