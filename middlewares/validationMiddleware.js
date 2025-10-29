const { body, validationResult } = require("express-validator");

// ✅ Kiểm tra dữ liệu đầu vào khi tạo booking
exports.validateTransaction = [
  // Kiểm tra từng trường cơ bản
  body("user").notEmpty().withMessage("User ID is required"),
  body("hotel").notEmpty().withMessage("Hotel ID is required"),
  body("room")
    .isArray({ min: 1 })
    .withMessage("Room must be an array with at least one room"),
  body("dateStart")
    .isISO8601()
    .toDate()
    .withMessage("Invalid start date (must be ISO8601 format)"),
  body("dateEnd")
    .isISO8601()
    .toDate()
    .withMessage("Invalid end date (must be ISO8601 format)"),
  body("price").isFloat({ gt: 0 }).withMessage("Price must be greater than 0"),
  body("payment").notEmpty().withMessage("Payment method is required"),

  // ✅ Custom validate date range
  body("dateEnd").custom((value, { req }) => {
    const start = new Date(req.body.dateStart);
    const end = new Date(value);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      throw new Error("Invalid date format");
    }

    if (end <= start) {
      throw new Error("End date must be after start date");
    }

    // Giới hạn thời gian đặt (ví dụ: không được đặt quá 30 ngày)
    const diffDays = (end - start) / (1000 * 60 * 60 * 24);
    if (diffDays > 30) {
      throw new Error("Booking duration cannot exceed 30 days");
    }

    return true;
  }),

  // ✅ Middleware tổng hợp kiểm tra lỗi
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }
    next();
  },
];
