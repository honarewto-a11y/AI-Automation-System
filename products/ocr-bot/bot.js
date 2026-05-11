const { Telegraf } = require("telegraf");
const config = require("./config");

const bot = new Telegraf(config.botToken);

const startHandler = require("./handlers/start");

bot.start(async (ctx) => {
    await startHandler(ctx);
});

bot.action(/buy_(.*)/, require("./handlers/payment"));
bot.action("about", require("./handlers/about"));
bot.action("support", require("./handlers/support"));

bot.catch(require("./handlers/error"));

bot.launch();
