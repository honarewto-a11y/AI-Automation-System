const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

console.log("🧠 NoraCivilis Self‑Completion Engine");
console.log("ROOT:", ROOT);

const MODULES = [
  "engine/engine.js",
  "layers/layers.js",
  "foundations/foundations.js",
  "identity/identity.js",
  "rules/rules.js",
  "memory/memory.js",
  "data/data.js",
  "connectors/connectors.js",
  "monitoring/monitoring.js",
  "versioning/versioning.js",
  "empires/empires.js"
];

MODULES.forEach(file => {
  const full = path.join(ROOT, file);
  if (!fs.existsSync(full)) {
    console.log("❌ فایل وجود ندارد:", file);
    return;
  }

  let content = fs.readFileSync(full, "utf8");

  // اگر module.exports وجود ندارد → اضافه کن
  if (!content.includes("module.exports")) {
    content += `

module.exports = {
    initialize() {
        console.log("⚙ ماژول ${file} initialize شد (خودکار)");
    }
};
`;
    fs.writeFileSync(full, content, "utf8");
    console.log("✏ اضافه شد: module.exports →", file);
    return;
  }

  // اگر initialize وجود ندارد → اضافه کن
  if (!content.includes("initialize")) {
    content = content.replace(
      /module\.exports\s*=\s*{([\s\S]*?)}/,
      (match, inner) => {
        return `module.exports = {${inner}
    ,
    initialize() {
        console.log("⚙ ماژول ${file} initialize شد (خودکار)");
    }
}`;
      }
    );
    fs.writeFileSync(full, content, "utf8");
    console.log("✏ اضافه شد: initialize() →", file);
  }
});

console.log("✅ Self‑Completion کامل شد.");
