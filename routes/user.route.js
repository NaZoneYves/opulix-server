const express = require("express");
const router = express.Router();
const { verifyToken, verifyRole } = require("../middlewares/authMiddleware");
const userController = require("../controllers/user.controller");

// 🧩 Đăng ký & đăng nhập (public)
router.post("/register", userController.register);
router.post("/login", userController.login);

// 👑 Chỉ admin được xem danh sách user
router.get(
  "/admin/users",
  verifyToken,
  verifyRole("admin"),
  userController.getAllUsers
);

// 👥 Ai cũng có thể xem tổng số user
router.get("/count", userController.countUsers);

module.exports = router;
