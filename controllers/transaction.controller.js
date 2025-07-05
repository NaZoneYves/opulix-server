const transactionService = require("../services/transaction.service");

exports.createTransaction = async (req, res) => {
  try {
    const result = await transactionService.createTransaction(req.body);
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await transactionService.getAllTransactions();
    res.status(200).json(transactions);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch transactions", error: err.message });
  }
};

exports.getTransactionByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const transactions = await transactionService.getTransactionByUser(userId);
    res.status(200).json(transactions);
  } catch (error) {
    console.error("❌ Error in getTransactionsByUser:", error.message);
    res.status(500).json({ message: "Failed to fetch transactions for user." });
  }
};
