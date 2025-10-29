// middlewares/rateLimit.js
const rateLimit = require("express-rate-limit");

// ✅ Mỗi IP chỉ được gửi tối đa 100 request trong 15 phút
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 phút
  max: 5, // chỉ cho phép 5 request / phút
  message: {
    success: false,
    message: "Too many requests from this IP, please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = limiter;
