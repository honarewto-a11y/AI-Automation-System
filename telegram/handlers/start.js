module.exports = async (ctx) => {
    const payload = ctx.startPayload;

    // Ürün linkinden giriş
    if (payload && payload.startsWith("buy_")) {
        const productKey = payload.replace("buy_", "");

        await ctx.reply(
            "🛒 Satın alma işlemi için aşağıdaki butona tıklayın:",
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: `🛒 ${productKey} satın al`, callback_data: `buy_${productKey}` }
                        ]
                    ]
                }
            }
        );

        return;
    }

    // Normal giriş → Hoşgeldin + Menü
    await ctx.reply("👋 Selam dostum! Buradasın, harika. Hadi başlayalım.");
    await require("./menu")(ctx);
};
