/**
 * NoraCivilis I/O Layer
 * 1) Normalizer Engine
 * 2) UTF-8 Fixer
 * 3) LLM Harmonizer
 */

function toUtf8String(raw) {
    if (raw == null) return "";
    if (Buffer.isBuffer(raw)) {
        return raw.toString("utf8");
    }
    if (typeof raw === "string") {
        return raw;
    }
    return String(raw);
}

// 1) Normalizer Engine
function normalizeText(text) {
    text = toUtf8String(text);

    // حذف کاراکترهای کنترل عجیب
    text = text.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "");

    // نرمال‌سازی فاصله‌ها
    text = text.replace(/\s+/g, " ");

    // نرمال‌سازی فاصلهٔ قبل/بعد از علائم
    text = text.replace(/\s*([،,.!?؛:])\s*/g, " $1 ");

    // نرمال‌سازی دوبارهٔ فاصله‌ها
    text = text.replace(/\s+/g, " ").trim();

    return text;
}

// 2) UTF‑8 Fixer
function fixUtf8(raw) {
    // در صورت خراب بودن، حداقل مطمئن می‌شویم UTF-8 است
    const s = toUtf8String(raw);
    return s;
}

// 3) LLM Harmonizer
function harmonizeLLMOutput(text) {
    text = toUtf8String(text);

    // اگر خروجی شامل لاگ‌های داخلی است، همان را نگه می‌داریم
    // فقط کمی تمیزش می‌کنیم
    text = text.replace(/\r\n/g, "\n");

    // حذف چند خط خالی متوالی
    text = text.replace(/\n{3,}/g, "\n\n");

    return text.trim();
}

module.exports = {
    toUtf8String,
    normalizeText,
    fixUtf8,
    harmonizeLLMOutput
};
