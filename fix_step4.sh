#!/bin/bash

echo "🔵 اصلاح پله ۴ (بازنویسی فقط متن نهایی)..."

cat > /nora/mother.js << 'EOM'
/**
 * NoraCivilis Mother Engine (FULL MODE — FIXED STEP 4)
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
    const { text, channel, userId, meta } = payload;

    const base = runCivilization(text);

    // خروجی تمدنی اولیه
    let final = composer.compose(base);

    // تلاش برای استفاده از LLM داخلی
    try {
        const llmAnswer = await llm.ask(text, base);
        if (llmAnswer && llmQuality.isAcceptable(llmAnswer)) {
            final = llmAnswer;
        }
    } catch (e) {}

    // 🔥 پله ۴ — نسخهٔ اصلاح‌شده
    // فقط متن نهایی بازنویسی می‌شود، نه کل فریم و کانتکست
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

echo "🔵 ری‌استارت سرویس تلگرام..."
systemctl restart nora-telegram.service

echo "🟢 پله ۴ با موفقیت اصلاح و فعال شد."
