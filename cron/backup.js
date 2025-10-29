const cron = require("node-cron");
const { exec } = require("child_process");
const path = require("path");

// 🕐 Mỗi ngày 1 lần lúc 23:59
const startBackup = () => {
  cron.schedule("*/1 * * * *", () => {
    const backupPath = path.join(__dirname, `./backup/backup-${Date.now()}.gz`);
    const cmd = `mongodump --uri="${process.env.MONGO_URL}" --archive=${backupPath} --gzip`;

    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.error("❌ Backup failed:", error.message);
      } else {
        console.log("✅ Backup completed:", backupPath);
      }
    });
  });
};

module.exports = startBackup;
