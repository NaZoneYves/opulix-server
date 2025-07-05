// cron/schedule.js
const cron = require("node-cron");
const updateExpiredTransactions = require("../utils/updateTransactionStatus");

const startCronJobs = () => {
  cron.schedule("* * * * *", async () => {
    console.log("🕐 [TEST] Running auto-update...");
    await updateExpiredTransactions();
  });
};

module.exports = startCronJobs;
