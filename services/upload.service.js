const cloudinary = require("../utils/cloudinary");

exports.uploadImages = async (files, hotelFolderName) => {
  const uploadPromises = files.map((file) =>
    cloudinary.uploader.upload(file.path, {
      folder: `opulix_hotels/${hotelFolderName}`,
    })
  );

  const results = await Promise.all(uploadPromises);
  return results.map((res) => res.secure_url);
};
