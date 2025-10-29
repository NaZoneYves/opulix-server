const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/**
 * Đăng ký người dùng mới
 */
exports.register = async ({ username, password, role = "user" }) => {
  // 1️⃣ Kiểm tra username đã tồn tại chưa
  const existingUser = await User.findOne({ username });
  if (existingUser) throw new Error("User already exists");

  // 2️⃣ Mã hoá mật khẩu (bảo vệ tính Confidentiality)
  const hashed = await bcrypt.hash(password, 10);

  // 3️⃣ Tạo user mới và lưu vào DB
  const user = new User({ username, password: hashed, role });
  await user.save();

  // 4️⃣ Xoá password trước khi trả về client
  const { password: _, ...userData } = user.toObject();
  return userData;
};

/**
 * Đăng nhập người dùng
 */
exports.login = async ({ username, password }) => {
  // 1️⃣ Kiểm tra username có tồn tại không
  const user = await User.findOne({ username });
  if (!user) throw new Error("Invalid username or password");

  // 2️⃣ So sánh password người dùng nhập với password đã mã hoá trong DB
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid username or password");

  // 3️⃣ Tạo JWT token để xác thực phiên đăng nhập
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" } // token hết hạn sau 1 ngày
  );

  // 4️⃣ Ẩn password trước khi trả về
  const { password: _, ...userData } = user.toObject();

  return { token, user: userData };
};

/**
 * Lấy danh sách tất cả user (chỉ dành cho admin)
 */
exports.getAllUsers = async () => {
  // Ẩn trường password bằng cú pháp select("-password")
  return await User.find({}, "-password");
};

/**
 * Đếm tổng số user trong hệ thống
 */
exports.countUsers = async () => {
  return await User.countDocuments();
};
