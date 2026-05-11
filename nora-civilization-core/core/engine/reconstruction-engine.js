const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

console.log("🔥 NoraCivilis Reconstruction Engine v3 — Phase 2");
console.log("ROOT:", ROOT);

// مسیرهای مقصد
const CORE_DIR = path.join(ROOT, "core");
const API_DIR = path.join(ROOT, "api");

// فایل‌ها و پوشه‌هایی که باید به core منتقل شوند
const CORE_ITEMS = [
  "engine",
  "layers",
  "foundations",
  "identity",
  "rules",
  "memory",
  "versioning",
  "connectors",
  "data",
  "monitoring",
  "empires",
  "server.js",
  "start.js",
  "test.js"
];

// فایل‌هایی که باید به api منتقل شوند
const API_ITEMS = [
  "api-server.js"
];

// تابع انتقال
function moveItem(item, targetDir) {
  const src = path.join(ROOT, item);
  const dest = path.join(targetDir, item);

  if (!fs.existsSync(src)) {
    console.log("⚠ پیدا نشد:", item);
    return;
  }

  fs.renameSync(src, dest);
  console.log("📦 منتقل شد:", item, "→", targetDir);
}

console.log("\n---- انتقال فایل‌ها به core/ ----");
CORE_ITEMS.forEach(item => moveItem(item, CORE_DIR));

console.log("\n---- انتقال فایل‌ها به api/ ----");
API_ITEMS.forEach(item => moveItem(item, API_DIR));

console.log("\nPhase 2 کامل شد.");
console.log("برای شروع Phase 3 (اصلاح requireها) باید تأیید بدهی.");
