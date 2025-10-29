// utils/updateTransactionStatus.js
const Transaction = require("../models/Transaction");
const dayjs = require("dayjs");

const updateExpiredTransactions = async () => {
  const today = dayjs().startOf("day").toDate();

  const result = await Transaction.updateMany(
    {
      dateEnd: { $lt: today },
      status: { $in: ["Booked", "Checkin"] },
    },
    { $set: { status: "Checkout" } }
  );

  if (result.modifiedCount > 0) {
    console.log(
      `Auto Updated ${result.modifiedCount} transaction(s) to 'Checkout'`
    );
  } else {
    console.log("No transactions to update today.");
  }
};

module.exports = updateExpiredTransactions;
