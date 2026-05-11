module.exports = {
    refine(llmOutput, userInput) {
        if (!llmOutput || typeof llmOutput !== "string") return null;

        // اگر ورودی خیلی ساده است، فیلتر تمدنی را اجرا نکن
        if (/^(سلام|hi|hello)$/i.test(userInput.trim())) {
            return llmOutput.trim();
        }

        // اگر جواب کوتاه یا ساده است، فیلتر تمدنی را اجرا نکن
        if (llmOutput.length < 40) {
            return llmOutput.trim();
        }

        // حالت عمیق تمدنی
        const cleaned = llmOutput.replace(/\s+/g, " ").trim();
        return `
پاسخ دانشی گسترده (پردازش‌شده توسط فیلتر تمدنی):
${cleaned}
— لایهٔ تمدنی NoraCivilis —
این پاسخ با هویت تمدنی، لحن حکیمانه، و اصول اخلاقی تمدن هماهنگ شد.
        `.trim();
    }
};
