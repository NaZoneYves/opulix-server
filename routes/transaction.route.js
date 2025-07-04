const transactionController = require("../controllers/transaction.controller");
const express = require("express");
const router = express.Router();

router.post("/", transactionController.createTransaction);
router.get("/user/:userId", transactionController.getTransactionByUser);

module.exports = router;
