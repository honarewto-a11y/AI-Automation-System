module.exports = async (ctx) => {
    await ctx.reply("Ana Menü", {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "ℹ️ Marka Açıklaması", callback_data: "about" }
                ],
                [
                    { text: "📞 Destek", callback_data: "support" }
                ]
            ]
        }
    });
};
