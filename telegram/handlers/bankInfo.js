module.exports = async (ctx) => {
    return ctx.reply(
        "💳 Ziraat Bankası Ödeme Bilgileri\n\n" +
        "👤 Hesap Sahibi: MORTEZA HONARAMOUZ\n" +
        "💳 Kart Numarası: 5124 4000 6735 9382\n" +
        "🏦 IBAN: TR17 0001 0090 1108 5617 4055 001",
        {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "🔄 Start", callback_data: "menu" }]
                ]
            }
        }
    );
};
