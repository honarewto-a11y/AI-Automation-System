const fs = require("fs");
const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

async function handleBankEmail(email) {
    const text = email.text || "";

    const match = text.match(/NC-(\d+)/);
    if (!match) return;

    const chatId = Number(match[1]);

    let pkg = "simple";
    if (text.includes("450")) pkg = "medium";
    if (text.includes("750")) pkg = "pro";
    if (text.includes("1500")) pkg = "custom";

    const zipPaths = {
        simple: "/nora/bots/simple-bot.zip",
        medium: "/nora/bots/medium-bot.zip",
        pro: "/nora/bots/pro-bot.zip",
        custom: "/nora/bots/custom-bot.zip"
    };

    const zip = zipPaths[pkg];

    if (!fs.existsSync(zip)) {
        await bot.telegram.sendMessage(chatId, "⚠️ ZIP dosyası bulunamadı.");
        return;
    }

    await bot.telegram.sendMessage(chatId, "💳 Ödeme onaylandı. Dosyanız gönderiliyor...");
    await bot.telegram.sendDocument(chatId, { source: zip });
}

module.exports = { handleBankEmail };
