module.exports = async (ctx) => {
    await ctx.reply("Destek için WhatsApp üzerinden iletişime geçebilirsiniz:", {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "📞 WhatsApp Destek", url: "https://wa.me/message/LXJQYUJAPOYEO1" }
                ]
            ],
            remove_keyboard: true
        }
    });
};
