const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

console.log("🔥 NoraCivilis Reconstruction Engine v3 — Phase 3");
console.log("ROOT:", ROOT);

// فایل‌هایی که در ریشه هستند و ممکنه به مسیرهای قدیمی اشاره کنن
const TARGET_FILES = [
  "core-start.js",
  "setup-civilization-systems.sh",
  "setup-engine-and-versioning.sh"
];

// نگاشت مسیرهای قدیمی → جدید
const REPLACE_MAP = {
  "./engine/": "./core/engine/",
  "./layers/": "./core/layers/",
  "./foundations/": "./core/foundations/",
  "./identity/": "./core/identity/",
  "./rules/": "./core/rules/",
  "./memory/": "./core/memory/",
  "./versioning/": "./core/versioning/",
  "./connectors/": "./core/connectors/",
  "./data/": "./core/data/",
  "./monitoring/": "./core/monitoring/",
  "./empires/": "./core/empires/"
};

function rewriteFile(relPath) {
  const fullPath = path.join(ROOT, relPath);
  if (!fs.existsSync(fullPath)) {
    console.log("⚠ پیدا نشد:", relPath);
    return;
  }

  let content = fs.readFileSync(fullPath, "utf8");
  let original = content;

  for (const [oldPath, newPath] of Object.entries(REPLACE_MAP)) {
    if (content.includes(oldPath)) {
      content = content.split(oldPath).join(newPath);
    }
  }

  if (content !== original) {
    fs.writeFileSync(fullPath, content, "utf8");
    console.log("✏ مسیرها اصلاح شد در:", relPath);
  } else {
    console.log("✔ نیازی به تغییر نبود:", relPath);
  }
}

console.log("\n---- اصلاح مسیرها در فایل‌های ریشه ----");
TARGET_FILES.forEach(rewriteFile);

console.log("\nPhase 3 کامل شد. مسیرهای ریشه با ساختار جدید core/ هماهنگ شدند.");
