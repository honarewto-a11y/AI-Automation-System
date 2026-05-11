const TelegramBot = require("node-telegram-bot-api");
const router = require("/nora/civilization-router.js");
const token = require("./config.js").botToken;

const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
    const payload = {
        text: msg.text,
        userId: msg.from.id,
        channel: "telegram",
        update_id: msg.message_id
    };

    const result = await router(payload);

    if (result && result.answer) {
        bot.sendMessage(msg.chat.id, result.answer);
    }
});
