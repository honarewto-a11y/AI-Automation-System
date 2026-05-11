const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const CORE = path.join(ROOT, "core");

console.log("🔥 NoraCivilis Reconstruction Engine v3 — Phase 4");
console.log("ROOT:", ROOT);

// نگاشت مسیرهای قدیمی → جدید
const MAP = {
  "./engine/": "./engine/",
  "./engine/": "./engine/",
  "./layers/": "./layers/",
  "./layers/": "./layers/",
  "./foundations/": "./foundations/",
  "./foundations/": "./foundations/",
  "./identity/": "./identity/",
  "./identity/": "./identity/",
  "./rules/": "./rules/",
  "./rules/": "./rules/",
  "./memory/": "./memory/",
  "./memory/": "./memory/",
  "./versioning/": "./versioning/",
  "./versioning/": "./versioning/",
  "./connectors/": "./connectors/",
  "./connectors/": "./connectors/",
  "./data/": "./data/",
  "./data/": "./data/",
  "./monitoring/": "./monitoring/",
  "./monitoring/": "./monitoring/",
  "./empires/": "./empires/",
  "./empires/": "./empires/"
};

// اسکن همهٔ فایل‌های core
function scan(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const full = path.join(dir, item.name);

    if (item.isDirectory()) {
      scan(full);
      continue;
    }

    if (!item.name.endsWith(".js")) continue;

    let content = fs.readFileSync(full, "utf8");
    let original = content;

    for (const [oldPath, newPath] of Object.entries(MAP)) {
      if (content.includes(oldPath)) {
        content = content.split(oldPath).join(newPath);
      }
    }

    if (content !== original) {
      fs.writeFileSync(full, content, "utf8");
      console.log("✏ اصلاح شد:", full.replace(ROOT + "/", ""));
    }
  }
}

console.log("\n---- اصلاح requireها در کل core ----");
scan(CORE);

console.log("\nPhase 4 کامل شد. تمدن آمادهٔ اجراست.");
