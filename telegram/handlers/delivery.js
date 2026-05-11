const loadProducts = require("../services/productLoader");

module.exports = async (ctx) => {
    const productKey = ctx.match?.[1];

    // Ürün belirli değilse dosya gönderilmesin
    if (!productKey) {
        return ctx.reply("❗ Hata: Ürün belirlenemedi. Lütfen satın alma linkinden tekrar giriş yapın.");
    }

    const products = loadProducts();
    if (!products[productKey]) {
        return ctx.reply("Ürün bulunamadı.");
    }

    const zipPath = products[productKey].zip;
    return ctx.replyWithDocument({ source: zipPath });
};
