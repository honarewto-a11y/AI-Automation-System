module.exports = {
    interpret(input) {
        const text = (input || "").toString().trim();
        if (!text) return { type: "empty", raw: text };

        // نرمال‌سازی ورودی
        const normalized = text
            .replace(/[\u061F]/g, "?")   // تبدیل ؟ فارسی به ? انگلیسی
            .replace(/ي/g, "ی")
            .replace(/ك/g, "ک")
            .trim()
            .toLowerCase();

        // تشخیص سؤال با regex درست
        const questionRegex = /(چرا|چطور|چگونه|چیست|چی هست|کجاست|کیست|چند|\?)/;

        if (questionRegex.test(normalized)) {
            return { type: "question", raw: text };
        }

        // تشخیص ریاضی
        const mathRegex = /\d+\s*[\+\-\*\/]\s*\d+/;
        if (
            normalized.includes("به علاوه") ||
            normalized.includes("+") ||
            normalized.includes("جمع") ||
            mathRegex.test(normalized)
        ) {
            return { type: "math", raw: text };
        }

        // پیش‌فرض
        return { type: "statement", raw: text };
    }
};
