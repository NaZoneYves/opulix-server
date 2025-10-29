const userService = require("../services/user.service");

/**
 * Đăng ký tài khoản mới
 */
exports.register = async (req, res) => {
  try {
    const user = await userService.register(req.body);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

/**
 * Đăng nhập hệ thống
 */
exports.login = async (req, res) => {
  try {
    const { token, user } = await userService.login(req.body);
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

/**
 * Lấy toàn bộ danh sách user (admin-only)
 */
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

/**
 * Đếm tổng số user trong hệ thống
 */
exports.countUsers = async (req, res) => {
  try {
    const count = await userService.countUsers();
    res.status(200).json({ count });
  } catch (err) {
    res.status(500).json({ message: "Failed to count users" });
  }
};
