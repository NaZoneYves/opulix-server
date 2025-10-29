// middlewares/errorHandler.js
module.exports = (err, req, res, next) => {
  console.error("🔥 Global Error:", err.message);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};
