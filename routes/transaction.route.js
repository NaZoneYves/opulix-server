const express = require("express");
const router = express.Router();
const transactionService = require("../services/transaction.service");
const { validateTransaction } = require("../middlewares/validationMiddleware");

// 🧾 Tạo transaction (booking mới)
router.post("/", validateTransaction, async (req, res) => {
  try {
    const result = await transactionService.createTransaction(req.body);
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// 📜 Lấy tất cả transactions
router.get("/", async (req, res) => {
  try {
    const result = await transactionService.getAllTransactions();
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 📊 Đếm transactions
router.get("/count", async (req, res) => {
  try {
    const count = await transactionService.countTransactions();
    res.json({ success: true, count });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
