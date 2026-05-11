const fs = require("fs");
const path = require("path");
const { Telegraf } = require("telegraf");

// === TELEGRAM BOT ===
const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

// === ZIP PATHS ===
const ZIP_PATHS = {
  simple: "/nora/bots/simple-bot.zip",
  medium: "/nora/bots/medium-bot.zip",
  pro: "/nora/bots/pro-bot.zip",
  custom: "/nora/bots/custom-bot.zip"
};

// === PAYMENT REGISTRY ===
const REG_PATH = path.join(__dirname, "payment-registry.json");

function loadRegistry() {
  if (!fs.existsSync(REG_PATH)) return [];
  return JSON.parse(fs.readFileSync(REG_PATH, "utf8"));
}

function saveRegistry(data) {
  fs.writeFileSync(REG_PATH, JSON.stringify(data, null, 2));
}

// === PARSE AMOUNT (نسخه ضد خطا) ===
// این نسخه هر عددی مثل 1.000,00 یا 1000,00 یا 1000 را می‌گیرد
function parseAmount(str) {
  if (!str) return null;
  const cleaned = str.replace(/\./g, "").replace(",", ".").replace(/[^\d.]/g, "");
  return parseFloat(cleaned);
}

// === PARSE ZIRAAT EMAIL ===
function parseZiraatEmail(text) {
  // گرفتن مبلغ بدون نیاز به TL
  const amountMatch = text.match(/([0-9.,]+)\s*TL/i);

  const accountMatch = text.match(/(\d+)\s*ek nolu hesabınıza/);
  const senderMatch = text.match(/tarafından,\s*(.+?)\s*ek nolu hesabınıza/);

  const amount = amountMatch ? parseAmount(amountMatch[1]) : null;
  const account = accountMatch ? accountMatch[1] : null;
  const sender = senderMatch ? senderMatch[1].trim() : null;

  return { amount, account, sender };
}

// === MATCH PAYMENT ===
function resolvePaymentFromEmail(emailText) {
  const info = parseZiraatEmail(emailText);
  if (!info.amount) {
    console.log("❌  Tutar bulunamadı.");
    return null;
  }

  const registry = loadRegistry();

  const match = registry.find(p =>
    p.status === "pending" &&
    Number(p.amount) === Number(info.amount)
  );

  if (!match) {
    console.log("❌  Eşleşen bekleyen ödeme bulunamadı.", info);
    return null;
  }

  match.status = "paid";
  match.paid_at = new Date().toISOString();
  saveRegistry(registry);

  console.log("✅  Ödeme eşleşti:", match);
  return match;
}

// === MAIN HANDLER ===
async function handleBankEmail(email) {
  const text = email.text || "";
  const payment = resolvePaymentFromEmail(text);
  if (!payment) return;

  const zip = ZIP_PATHS[payment.package];
  if (!fs.existsSync(zip)) {
    console.log("⚠️ ZIP bulunamadı:", zip);
    return;
  }

  await bot.telegram.sendMessage(payment.chat_id, "💳 Ziraat havalesi alındı, dosyan geliyor...");
  await bot.telegram.sendDocument(payment.chat_id, { source: zip });

  console.log("📦 ZIP gönderildi:", zip);
}

module.exports = {
  parseZiraatEmail,
  resolvePaymentFromEmail,
  handleBankEmail
};
