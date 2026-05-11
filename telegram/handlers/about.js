module.exports = async (ctx) => {
    return ctx.reply(
        "ℹ️ NORA AI — Marka Açıklaması\n\n" +
        "Profesyonel Telegram botları, otomasyon sistemleri ve özel yazılım çözümleri sunuyoruz.",
        {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "🔄 Start", callback_data: "menu" }]
                ]
            }
        }
    );
};
