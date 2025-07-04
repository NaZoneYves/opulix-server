const express = require("express");
const router = express.Router();
const { authenticate, authorizeRoles } = require("../middlewares/auth");
const authController = require("../controllers/auth.controller");

router.post("/register", authController.register);
router.post("/login", authController.login);

// Chỉ admin mới được xem danh sách người dùng
router.get(
  "/admin/users",
  authenticate,
  authorizeRoles("admin"),
  authController.getAllUsers
);

module.exports = router;
