/**
 * NoraCivilis Language Engine (NO DEPENDENCIES)
 */

function detectLanguage(text) {
    const t = (text || "").trim();
    if (!t) return "fa";
    if (/[اآبپتثجچحخدذرزسشصضطظعغفقکگلمنوهی]/.test(t)) return "fa";
    if (/[a-z]/i.test(t)) return "en";
    if (/[çğıöşü]/i.test(t)) return "tr";
    if (/[ء-ي]/.test(t)) return "ar";
    return "fa";
}

function detectIntent(text) {
    const t = (text || "").trim();
    if (/چیست|nedir|what is|ما هو/i.test(t)) return "what_question";
    if (/چگونه|nasıl|how to/i.test(t)) return "how_question";
    if (/چرا|neden|why/i.test(t)) return "why_question";
    return "general";
}

function extractTopic(text) {
    const t = (text || "").trim();
    return t.replace(/چیست|nedir|what is|ما هو/gi, "").trim() || t;
}

function buildSemanticFrame(interpreted) {
    const rawInput = interpreted.rawInput;
    const detectedLanguage = detectLanguage(rawInput);
    const intent = detectIntent(rawInput);
    const topic = extractTopic(rawInput);

    const intro = `پرسش دربارهٔ «${topic}» دریافت شد.`;
    const knowledge = `برای درک «${topic}»، باید ساختار، زمینه و پیامدهای آن در سطوح علمی، انسانی و تمدنی بررسی شود.`;
    const deep = `در لایهٔ عمیق‌تر، «${topic}» بخشی از شبکهٔ بزرگ معنا، قدرت و ساختارهای تمدنی است.`;
    const philosophical = `از نظر فلسفی، «${topic}» پرسش‌هایی دربارهٔ معنا، حقیقت و جایگاه انسان برمی‌انگیزد.`;
    const cultural = `در فرهنگ‌های مختلف، «${topic}» معناها و روایت‌های متفاوتی داشته است.`;
    const structural = `از نظر ساختاری، «${topic}» بخشی از یک سیستم بزرگ‌تر است که با اقتصاد، سیاست و فرهنگ در ارتباط است.`;
    const future = `در آینده، «${topic}» می‌تواند مسیر تحول تمدن و شیوهٔ زیست انسان را تغییر دهد.`;

    const profile = {
        title: `پروفایل تمدنی «${topic}»`,
        scientific: `«${topic}» از منظر علمی قابل تحلیل است.`,
        historical: `«${topic}» در طول تاریخ نقش‌های متفاوتی داشته است.`,
        structural,
        philosophical,
        cultural,
        future
    };

    return {
        intent,
        meaning: rawInput,
        structure: { topic, type: intent === "what_question" ? "definition" : "general" },
        intro,
        knowledge,
        deep,
        philosophical,
        cultural,
        structural,
        future,
        profile,
        detectedLanguage
    };
}

function interpretInput(text) {
    return { rawInput: (text || "").toString().trim() };
}

module.exports = { interpretInput, buildSemanticFrame };
