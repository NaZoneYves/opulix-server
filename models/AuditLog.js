const mongoose = require("mongoose");

const auditLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  action: String, // create, update, delete
  target: String, // transaction, room, etc.
  targetId: String,
  timestamp: { type: Date, default: Date.now },
  changes: Object, // lưu chi tiết
});

module.exports = mongoose.model("AuditLog", auditLogSchema);
