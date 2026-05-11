module.exports = function expansionEngine(diagnostic, rootCause) {
    // نسخه‌ی پایه: فقط پیشنهاد گسترش می‌دهد
    const expansions = [];

    expansions.push("پیشنهاد گسترش: اضافه‌کردن یک کانال جدید (مثلاً وب یا Discord) برای کاهش وابستگی به یک ورودی.");

    if (rootCause.area === "ollama") {
        expansions.push("پیشنهاد گسترش: اضافه‌کردن یک LLM خارجی به‌عنوان fallback تمدنی.");
    }

    if (rootCause.area === "telegram") {
        expansions.push("پیشنهاد گسترش: طراحی یک لایه‌ی API مستقل از Telegram برای تعامل تمدن.");
    }

    return expansions;
};
