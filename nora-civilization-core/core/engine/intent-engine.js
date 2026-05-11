function detectIntent(text = "") {
    const t = text.toString().trim();
    if (!t) return { type: "empty" };

    // فقط تشخیص، بدون پاسخ‌دهی
    if (/(^سلام$|سلامی|سلاممم|hi|hello)/i.test(t))
        return { type: "greeting" };

    if (/(حالم خوب نیست|حالم بده|خستم|خسته‌ام|ناراحتم|غمگینم|افسرده‌ام)/.test(t))
        return { type: "emotional" };

    if (/(خری|احمق|چرتی|مزخرف)/.test(t))
        return { type: "toxic-lite" };

    if (/(اسمت چیه|اسم تو چیه|کی هستی|تو کی هستی)/.test(t))
        return { type: "identity" };

    if (/دو به علاوه دو|2\s*\+\s*2/.test(t))
        return { type: "math-simple", payload: { expr: "2+2" } };

    if (/(من مریضم|حالم بد است|بیمارم)/.test(t))
        return { type: "health-basic" };

    if (/(فلسفه چیست|معنای زندگی|هستی چیست|خدا چیست|خدا هست|خدا وجود دارد)/.test(t))
        return { type: "philosophy" };

    return { type: "generic" };
}

function answerForIntent(intent, text) {
    // همیشه null → یعنی بفرست به LLM Engine
    return null;
}

module.exports = { detectIntent, answerForIntent };
