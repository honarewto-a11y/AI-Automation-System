#!/bin/bash

echo "🔵 نصب Semantic Frame + Language Engine + Mother Engine..."

mkdir -p /nora/civilization-language-engine
mkdir -p /nora/civilization-output-engine

# -----------------------------
# 1) language-core.js (Language Engine کامل)
# -----------------------------
cat > /nora/civilization-language-engine/language-core.js << 'EOM'
/**
 * NoraCivilis Language Engine (FULL)
 * - تشخیص زبان
 * - استخراج intent
 * - ساخت Semantic Frame
 */

const franc = require("franc-min"); // اگر نداری، می‌تونی حذفش کنی و فقط fa بگیری

function detectLanguage(text) {
    const t = (text || "").trim();
    if (!t) return "fa";

    try {
        const code = franc(t);
        if (code === "tur") return "tr";
        if (code === "eng") return "en";
        if (code === "ara") return "ar";
        if (code === "fas") return "fa";
    } catch (e) {}

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
    const { rawInput } = interpreted;
    const detectedLanguage = detectLanguage(rawInput);
    const intent = detectIntent(rawInput);
    const topic = extractTopic(rawInput);

    const meaning = rawInput;

    const structure = {
        topic,
        type: intent === "what_question" ? "definition" : "general"
    };

    const intro = `پرسش دربارهٔ «${topic}» دریافت شد.`;
    const knowledge = `برای درک «${topic}»، باید ساختار، زمینه و پیامدهای آن در سطوح علمی، انسانی و تمدنی بررسی شود.`;
    const deep = `در لایهٔ عمیق‌تر، «${topic}» بخشی از شبکهٔ بزرگ معنا، قدرت و ساختارهای تمدنی است که در طول تاریخ دگرگون می‌شوند.`;

    const philosophical = `از نظر فلسفی، «${topic}» پرسش‌هایی دربارهٔ معنا، حقیقت، قدرت و جایگاه انسان در جهان برمی‌انگیزد.`;
    const cultural = `در فرهنگ‌های مختلف، «${topic}» معناها، نمادها و روایت‌های متفاوتی داشته است.`;
    const structural = `از نظر ساختاری، «${topic}» بخشی از یک سیستم بزرگ‌تر است که با اقتصاد، سیاست، فرهنگ و تکنولوژی در ارتباط است.`;
    const future = `در آینده، «${topic}» می‌تواند مسیر تحول تمدن، ساختارهای فکری و شیوهٔ زیست انسان را تحت تأثیر قرار دهد.`;

    const profile = {
        title: `پروفایل تمدنی «${topic}»`,
        scientific: `«${topic}» از منظر علمی قابل تحلیل است و در چارچوب روش‌های تجربی، نظری یا میان‌رشته‌ای بررسی می‌شود.`,
        historical: `«${topic}» در طول تاریخ، نقش‌ها و تفسیرهای متفاوتی داشته و در دوره‌های مختلف، معنای آن دگرگون شده است.`,
        structural,
        philosophical,
        cultural,
        future
    };

    return {
        intent,
        meaning,
        structure,
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
    return {
        rawInput: (text || "").toString().trim()
    };
}

module.exports = {
    interpretInput,
    buildSemanticFrame
};
EOM

# -----------------------------
# 2) output-composer.js (Semantic Frame کامل در خروجی)
# -----------------------------
cat > /nora/civilization-output-engine/output-composer.js << 'EOM'
/**
 * NoraCivilis Output Composer (FULL FRAME)
 */

function compose({ frame, persona }) {
    return `
${frame.intro}

🔹 تحلیل علمی:
${frame.knowledge}

🔹 تحلیل عمیق تمدنی:
${frame.deep}

🔹 لایهٔ فلسفی:
${frame.philosophical}

🔹 لایهٔ فرهنگی:
${frame.cultural}

🔹 لایهٔ ساختاری:
${frame.structural}

🔹 لایهٔ آینده:
${frame.future}

🔹 شخصیت فعال:
${persona || "default-persona"}
`.trim();
}

module.exports = { compose };
EOM

# -----------------------------
# 3) mother.js (Mother Engine کامل و ساده)
# -----------------------------
cat > /nora/mother.js << 'EOM'
/**
 * NoraCivilis Mother Engine (FULL STACK, SINGLE QUESTION)
 */

const lang = require("/nora/civilization-language-engine/language-core.js");
const composer = require("/nora/civilization-output-engine/output-composer.js");

const llm = require("/nora/nora-civilization-core/engine/llm-manager.js");
const llmQuality = require("/nora/nora-civilization-core/engine/llm-quality.js");
const personaEngine = require("/nora/nora-civilization-core/engine/persona-engine.js");

function runCivilization(inputText) {
    const rawInput = (inputText || "").toString().trim();
    const interpreted = lang.interpretInput(rawInput);
    const frame = lang.buildSemanticFrame(interpreted);
    const persona = personaEngine.selectPersona(rawInput, frame);

    return { rawInput, frame, persona };
}

module.exports = async function mother(payload) {
    const { text, channel, userId } = payload;

    const base = runCivilization(text);

    let final = composer.compose(base);

    try {
        const llmAnswer = await llm.ask(text, base);
        if (llmAnswer && llmQuality.isAcceptable(llmAnswer)) {
            final = llmAnswer;
        }
    } catch (e) {}

    try {
        const cleanFinal = final.toString().trim();
        final = await llm.ask(
            `این متن را فقط به زبان ${base.frame.detectedLanguage} بازنویسی کن، بدون هیچ توضیح اضافی:\n\n${cleanFinal}`
        );
    } catch (e) {}

    return {
        answer: final,
        meta: { channel, userId }
    };
};
EOM

echo "🟢 Semantic Frame + Language Engine + Mother Engine نصب شدند."
