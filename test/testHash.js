// test/testHash.js
const crypto = require("crypto");

// 👉 Nhập đúng giá và payment từ bản ghi trong MongoDB
const price = 440;
const payment = "Credit Card";

// 🔐 Tạo lại hash y như trong service
const generatedHash = crypto
  .createHash("sha256")
  .update(`${price}${payment}`)
  .digest("hex");

console.log("✅ Generated Hash:", generatedHash);

// 👉 Nếu bạn muốn so sánh thủ công với hash trong MongoDB:
const dbHash =
  "1a63d17364d1f3cd2a7cccc21e3d720cf1b5939e1fc0d7844172069251c7d124";

if (dbHash) {
  console.log("🧩 Hash từ DB:", dbHash);
  console.log(
    generatedHash === dbHash
      ? "✅ KHỚP - Dữ liệu không bị thay đổi"
      : "❌ KHÔNG KHỚP - Có thể dữ liệu bị thay đổi!"
  );
} else {
  console.log("ℹ️ Nhớ dán giá trị integrityHash từ DB để so sánh.");
}
