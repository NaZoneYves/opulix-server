const jwt = require("jsonwebtoken");

// Middleware xác thực token (Authentication)
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // gắn thông tin user vào request
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid or expired token." });
  }
};

// Middleware phân quyền (Authorization)
const verifyRole = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: "Forbidden: insufficient rights" });
    }
    next();
  };
};

module.exports = { verifyToken, verifyRole };
