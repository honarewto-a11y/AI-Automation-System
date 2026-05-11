module.exports = function optimizationEngine(diagnostic, rootCause) {
    const optimizations = [];

    // نمونه‌های ساده‌ی v1
    if (rootCause.area === "ollama") {
        optimizations.push("پیشنهاد بهینه‌سازی: اضافه‌کردن timeout و retry برای درخواست‌های Ollama.");
    }

    if (rootCause.area === "telegram") {
        optimizations.push("پیشنهاد بهینه‌سازی: استفاده از backoff در صورت خطای موقت Telegram.");
    }

    if (rootCause.area === "systemd") {
        optimizations.push("پیشنهاد بهینه‌سازی: تنظیم Restart=always برای nora.service.");
    }

    if (optimizations.length === 0) {
        optimizations.push("پیشنهاد بهینه‌سازی: ثبت این خطا برای تحلیل عملکردی آینده.");
    }

    return optimizations;
};
