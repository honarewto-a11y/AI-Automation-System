const { Telegraf } = require("telegraf");
const config = require("./config");
const startHandler = require("./handlers/start");
const ocrHandler = require("./handlers/ocr");

const bot = new Telegraf(config.token);

bot.start(startHandler);
bot.on("photo", ocrHandler);

bot.launch().then(() => {
  console.log("✅ OCR Bot çalışıyor...");
});
