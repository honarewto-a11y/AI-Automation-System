const loadProducts = require("../services/productLoader");
const registry = require("../services/paymentRegistry");

module.exports = async (ctx) => {
    const productKey = ctx.match?.[1];

    // Eğer ürün belirli değilse ödeme açılmasın
    if (!productKey) {
        return ctx.reply("❗ Bir ürün seçmeden ödeme yapamazsınız.\nLütfen kanaldaki ürün linkine tıklayın.");
    }

    const products = loadProducts();
    if (!products[productKey]) {
        return ctx.reply("Ürün bulunamadı.");
    }

    const product = products[productKey];

    await ctx.reply(
        `💳 *Ziraat Bankası Ödeme Bilgileri*\n\n` +
        `👤 *Hesap Sahibi:* MORTEZA HONARAMOUZ\n` +
        `💳 *Kart Numarası:* 5124 4000 6735 9382\n` +
        `🏦 *IBAN (TR):* TR17 0001 0090 1108 5617 4055 001\n\n` +
        `📦 *Ürün:* ${productKey}\n` +
        `💰 *Fiyat:* ${product.price} TL\n\n` +
        `📌 *Lütfen açıklama kısmına Telegram kullanıcı adınızı yazın.*\n` +
        `Ödeme yaptıktan sonra sistem otomatik olarak kontrol edecektir.`,
        { parse_mode: "Markdown" }
    );

    registry.register(ctx.from.id, productKey);
};
