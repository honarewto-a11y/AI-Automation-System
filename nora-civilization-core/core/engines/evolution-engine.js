module.exports = function evolutionEngine(diagnostic, rootCause) {
    // نسخهٔ پایه: فقط پیشنهاد ارتقا می‌دهد، هنوز کد را خودکار تغییر نمی‌دهد
    const suggestions = [];

    if (rootCause.area === "ollama") {
        suggestions.push("پیشنهاد: اضافه‌کردن fallback به مدل دوم (مثلاً qwen2.5) در صورت خطای llama3.");
    }

    if (rootCause.area === "telegram") {
        suggestions.push("پیشنهاد: اضافه‌کردن queue برای پیام‌ها در صورت قطعی موقت Telegram.");
    }

    if (rootCause.area === "systemd") {
        suggestions.push("پیشنهاد: اضافه‌کردن watchdog برای مانیتورکردن nora.service.");
    }

    if (suggestions.length === 0) {
        suggestions.push("پیشنهاد: ثبت این خطا برای تحلیل نسل بعدی معماری تمدن.");
    }

    return suggestions;
};
