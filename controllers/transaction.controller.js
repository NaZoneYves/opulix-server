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
    res.status(200).json({ success: true, data: transactions });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to fetch transactions",
        error: err.message,
      });
  }
};

exports.getTransactionByUser = async (req, res) => {
  try {
    const transactions = await transactionService.getTransactionByUser(
      req.params.userId
    );
    res.status(200).json({ success: true, data: transactions });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to fetch transactions for user.",
      });
  }
};

exports.countTransactions = async (req, res) => {
  try {
    const count = await transactionService.countTransactions();
    res.status(200).json({ success: true, count });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to count transactions" });
  }
};
