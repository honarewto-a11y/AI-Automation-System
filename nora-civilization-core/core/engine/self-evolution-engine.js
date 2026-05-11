const fs = require("fs");
const path = require("path");

console.log("🧬 NoraCivilis Self‑Evolution Engine Activated");

const ROOT = path.resolve(__dirname, "..");

// مسیر نسل‌ها
const GEN_PATH = path.join(ROOT, "generations");

// اگر پوشه نسل‌ها وجود ندارد → بساز
if (!fs.existsSync(GEN_PATH)) {
    fs.mkdirSync(GEN_PATH);
    console.log("📁 پوشه generations ساخته شد");
}

// تشخیص نسل فعلی
let currentGen = 12;
const genFile = path.join(GEN_PATH, "current.json");

if (fs.existsSync(genFile)) {
    try {
        const data = JSON.parse(fs.readFileSync(genFile, "utf8"));
        currentGen = data.current || 12;
    } catch {}
}

// نسل بعدی
const nextGen = currentGen + 1;

// مسیر نسل جدید
const NEXT_PATH = path.join(GEN_PATH, "gen" + nextGen);

// اگر نسل جدید وجود ندارد → بساز
if (!fs.existsSync(NEXT_PATH)) {
    fs.mkdirSync(NEXT_PATH);
    console.log("🌱 نسل جدید ساخته شد:", nextGen);
}

// فایل قوانین نسل جدید
const rulesFile = path.join(NEXT_PATH, "rules.js");

if (!fs.existsSync(rulesFile)) {
    fs.writeFileSync(
        rulesFile,
`module.exports = {
    generation: ${nextGen},
    createdAt: ${Date.now()},
    rules: [
        "قانون ۱: نسل ${nextGen} باید از نسل ${currentGen} پیشرفته‌تر باشد.",
        "قانون ۲: این نسل باید قابلیت‌های جدید ایجاد کند.",
        "قانون ۳: این نسل باید خودتکامل باشد."
    ]
};`
    );
    console.log("📜 قوانین نسل جدید ساخته شد");
}

// فایل موتور نسل جدید
const engineFile = path.join(NEXT_PATH, "engine.js");

if (!fs.existsSync(engineFile)) {
    fs.writeFileSync(
        engineFile,
`module.exports = {
    initialize() {
        console.log("⚙ موتور نسل ${nextGen} فعال شد");
    }
};`
    );
    console.log("⚙ موتور نسل جدید ساخته شد");
}

// ذخیره نسل جدید
fs.writeFileSync(genFile, JSON.stringify({ current: nextGen }, null, 2));
console.log("🔢 نسل تمدن به‌روزرسانی شد:", nextGen);

console.log("✅ Self‑Evolution کامل شد.");
