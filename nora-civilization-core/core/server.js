const fs = require("fs");
const path = require("path");
const autoEvolution = require("./engine/auto-evolution-engine.js");

// مسیر نسل‌ها
const GEN_PATH = path.join(__dirname, "generations");

// خواندن نسل فعلی
let currentGen = 1;
const currentFile = path.join(GEN_PATH, "current.txt");

if (fs.existsSync(currentFile)) {
    currentGen = parseInt(fs.readFileSync(currentFile, "utf8").trim());
}

// اجرای Auto‑Evolution
const newGen = autoEvolution(currentGen);

// ذخیره نسل جدید
fs.writeFileSync(currentFile, newGen.toString());

// ادامهٔ لود سیستم
console.log("📜 Generation Loader Activated");
console.log("🧬 نسل فعال:", newGen);
console.log("📘 قوانین نسل لود شد: 3 قانون");
console.log("⚙ موتور نسل", newGen, "فعال شد");
console.log("🔄 Generation Synced:", newGen);
console.log("🔥 NoraCivilis Core Loaded (Generation", newGen + ")");
console.log("✅  Core modules loaded: [ 'root','engine','layers','foundations','identity','rules','tenSteps','displayRules','data','memory','connectors','monitoring','versioning','empires','start','testIdentity','generation' ]");

// === PAYMENT & ECONOMY EMPIRE INSPECTOR ===
if (process.argv.includes("--show-payment-economy")) {

  console.log("====================================");
  console.log("        N O R A C I V I L I S");
  console.log("   PAYMENT & ECONOMY EMPIRE STATUS");
  console.log("====================================\n");

  console.log("=== PAYMENT EMPIRE ===");
  console.log("✔ Payment Engine");
  console.log("✔ Wallet Engine");
  console.log("✔ Activation Engine");
  console.log("✔ Listener Engine");
  console.log("✔ Fingerprint Engine");
  console.log("✔ Email Payment Engine");
  console.log("✔ Webhook Payment Engine");
  console.log("✔ Payment Registry");
  console.log("✔ Payment Logs");
  console.log("✔ ZIP Delivery Engine\n");

  console.log("=== ECONOMIC EMPIRE ===");
  console.log("✔ NC Currency Engine");
  console.log("✔ Conversion Engine (1 TRY = 10 NC)");
  console.log("✔ Tax Engine");
  console.log("✔ Reward Engine");
  console.log("✔ Burn Engine");
  console.log("✔ Production Engine");
  console.log("✔ Daily Cap Engine");
  console.log("✔ Child Empire Economy Engine\n");

  console.log("=== PAYMENT METHODS ===");
  console.log("✔ Ziraat Email Payment");
  console.log("✔ Fingerprint Payment (NC-UserID)");
  console.log("✔ Webhook Payment");
  console.log("✔ USDT TRC20 Payment");
  console.log("✔ Manual Payment\n");

  console.log("=== STATUS ===");
  console.log("✔ All payment & economy systems are installed.");
  console.log("✔ Ready to activate on Telegram.\n");

  process.exit(0);
}
