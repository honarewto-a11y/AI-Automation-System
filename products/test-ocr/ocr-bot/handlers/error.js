module.exports = (ctx, err) => {
  console.error("Bot error:", err);
  ctx.reply("❌ Bir hata oluştu. Lütfen tekrar deneyin.");
};
