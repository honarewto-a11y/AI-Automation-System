#!/bin/bash

echo "🔵 اصلاح Mother Engine با مسیرهای درست..."

cat > /nora/mother.js << 'EOM'
/**
 * NoraCivilis Mother Engine (STABLE + CORRECT PATHS)
 */

const lang = require("/nora/civilization-language-engine/language-core.js");
const composer = require("/nora/civilization-output-engine/output-composer.js");

// مسیرهای درست و فعال تمدن:
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
        final = await llm.ask(
            `این متن را فقط به زبان ${base.frame.detectedLanguage} بازنویسی کن، بدون هیچ توضیح اضافی:\n\n${final}`
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

echo "🟢 Mother Engine با مسیرهای درست فعال شد."
