const fs = require("fs");
const path = require("path");

console.log("📜 Generation Loader Activated");

const ROOT = path.resolve(__dirname, "..");
const GEN_PATH = path.join(ROOT, "generations");
const GEN_FILE = path.join(GEN_PATH, "current.json");

// اگر نسل وجود ندارد → خروج
if (!fs.existsSync(GEN_FILE)) {
    console.log("⚠ هیچ نسل فعالی یافت نشد.");
    return;
}

// نسل فعلی
let currentGen = JSON.parse(fs.readFileSync(GEN_FILE, "utf8")).current;
console.log("🧬 نسل فعال:", currentGen);

// مسیر نسل
const GEN_DIR = path.join(GEN_PATH, "gen" + currentGen);

// قوانین نسل
const rulesFile = path.join(GEN_DIR, "rules.js");
if (fs.existsSync(rulesFile)) {
    const rules = require(rulesFile);
    console.log("📘 قوانین نسل لود شد:", rules.rules.length, "قانون");
}

// موتور نسل
const engineFile = path.join(GEN_DIR, "engine.js");
if (fs.existsSync(engineFile)) {
    const genEngine = require(engineFile);
    if (typeof genEngine.initialize === "function") {
        genEngine.initialize();
    }
}
