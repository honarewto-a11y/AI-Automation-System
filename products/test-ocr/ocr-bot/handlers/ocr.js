const ocrEngine = require("../services/ocrEngine");

module.exports = async (ctx) => {
  try {
    const fileId = ctx.message.photo.pop().file_id;
    const fileUrl = await ctx.telegram.getFileLink(fileId);

    await ctx.reply("⏳ Metin çıkarılıyor...");

    const text = await ocrEngine(fileUrl.href);

    if (!text) return ctx.reply("❌ Metin bulunamadı.");

    ctx.reply("📄 Çıkarılan Metin:\n\n" + text);
  } catch (err) {
    console.error(err);
    ctx.reply("❌ Bir hata oluştu. Lütfen tekrar deneyin.");
  }
};
