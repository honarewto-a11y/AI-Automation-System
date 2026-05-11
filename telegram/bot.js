const TelegramBot = require("node-telegram-bot-api");
const m = require("/nora/mother.js");

// توکن ربات را اینجا بگذار
const TOKEN = "8730267093:AAE1ccHP4vZlivUHXWsCkU764bXQUVlLXM4";

const bot = new TelegramBot(TOKEN, { polling: true });

// شروع
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "به تمدن NoraCivilis خوش آمدید.\nبرای دیدن کیف پول: /wallet");
});

// کیف پول
bot.onText(/\/wallet/, (msg) => {
  const user = msg.from.id;
  const w = m.showWallet(user);
  bot.sendMessage(msg.chat.id, `کیف پول شما:\nNC: ${w.NC}\nN: ${w.N}\nTRY: ${w.TRY}`);
});

// شارژ (کاربر فقط مبلغ را می‌نویسد)
bot.onText(/\/charge (.+)/, (msg, match) => {
  const user = msg.from.id;
  const amount = Number(match[1]);

  m.topup(user, amount);

  bot.sendMessage(msg.chat.id, `درخواست شارژ ثبت شد.\n${amount} لیر → ${amount * 10} NC`);
});

// خرید خدمت
bot.onText(/\/buy (.+)/, (msg, match) => {
  const user = msg.from.id;
  const serviceId = Number(match[1]);

  m.purchase(user, serviceId);

  bot.sendMessage(msg.chat.id, `درخواست خرید خدمت ${serviceId} ثبت شد.`);
});

// پاداش فعالیت (برای تست)
bot.onText(/\/reward (.+)/, (msg, match) => {
  const user = msg.from.id;
  const amount = Number(match[1]);

  m.rewardNC(user, amount);

  bot.sendMessage(msg.chat.id, `پاداش تمدنی: +${amount} NC`);
});

console.log("Telegram Empire is running...");
