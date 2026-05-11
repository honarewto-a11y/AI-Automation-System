#!/bin/bash

echo "🔵 اصلاح Mother Engine برای پشتیبانی از چندسؤالی..."

cat > /nora/mother.js << 'EOM'
/**
 * NoraCivilis Mother Engine (MULTI-QUESTION MODE)
 */

const lang = require("/nora/civilization-language-engine/language-core.js");
const composer = require("/nora/civilization-output-engine/output-composer.js");

const llm = require("/nora/nora-civilization-core/engine/llm-manager.js");
const llmQuality = require("/nora/nora-civilization-core/engine/llm-quality.js");
const personaEngine = require("/nora/nora-civilization-core/engine/persona-engine.js");

function runOneQuestion(text) {
    const raw = text.trim();
    const interpreted = lang.interpretInput(raw);
    const frame = lang.buildSemanticFrame(interpreted);
    const persona = personaEngine.selectPersona(raw, frame);
    return { raw, frame, persona };
}

async function processOne(text) {
    const base = runOneQuestion(text);

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

    return final;
}

module.exports = async function mother(payload) {
    const { text, channel, userId } = payload;

    const lines = text.split("\n").map(l => l.trim()).filter(l => l.length > 0);

    const results = [];
    for (const line of lines) {
        const out = await processOne(line);
        results.push(out);
    }

    return {
        answer: results.join("\n\n"),
        meta: { channel, userId }
    };
};
EOM

echo "🔵 ری‌استارت سرویس تلگرام..."
systemctl restart nora-telegram.service

echo "🟢 Mother Engine اکنون از چندسؤالی پشتیبانی می‌کند."
