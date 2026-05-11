module.exports = {
    channelId: "-1003776677784",
    sendToChannel: (bot, text) => {
        bot.sendMessage("-1003776677784", text, {
            parse_mode: "HTML"
        });
    }
};
