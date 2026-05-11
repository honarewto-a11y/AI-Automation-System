module.exports = function intelligenceEngine(diagnostic, rootCause, context = {}) {
    // نسخه‌ی پایه: فقط تحلیل سطح بالا تولید می‌کند
    const insights = [];

    insights.push("تحلیل هوشمند: این خطا نشان می‌دهد که تمدن باید تاب‌آوری بیشتری در این ناحیه داشته باشد.");

    if (rootCause.area === "ollama") {
        insights.push("بینش: وابستگی شدید به یک مدل واحد؛ پیشنهاد: چندمدلی کردن هسته‌ی زبانی.");
    }

    if (rootCause.area === "telegram") {
        insights.push("بینش: لایه‌ی تعامل کاربر نقطه‌ی حساس تمدن است؛ پیشنهاد: اضافه‌کردن کانال‌های موازی.");
    }

    if (rootCause.area === "systemd") {
        insights.push("بینش: زیرساخت اجرا باید پایدارتر شود؛ پیشنهاد: مانیتورینگ و آلارم تمدنی.");
    }

    return insights;
};
