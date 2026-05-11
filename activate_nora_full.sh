#!/bin/bash

echo "🔵 شروع فعال‌سازی پله‌های ۱ تا ۴ NoraCivilis..."

# -----------------------------
# پاک کردن کش تمدن
# -----------------------------
echo "🔵 پاک‌سازی کش تمدن..."
rm -rf /nora/cache/* 2>/dev/null
rm -rf /root/.cache/node/* 2>/dev/null
rm -rf /root/.npm/_cacache/* 2>/dev/null

# -----------------------------
# ری‌لود فایل‌های پله ۱ تا ۳
# -----------------------------
echo "🔵 ری‌لود Language Engine..."
node -e "delete require.cache['/nora/civilization-language-engine/language-core.js']"

echo "🔵 ری‌لود Composer..."
node -e "delete require.cache['/nora/civilization-output-engine/output-composer.js']"

# -----------------------------
# بازنویسی mother.js (پله ۴)
# -----------------------------
echo "🔵 فعال‌سازی پله ۴ (چندزبانه‌سازی خروجی)..."

cat > /nora/mother.js << 'EOM'
/**
 * NoraCivilis Mother Engine (FULL MODE)
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

    let final = composer.compose(base);

    try {
        const llmAnswer = await llm.ask(text, base);
        if (llmAnswer && llmQuality.isAcceptable(llmAnswer)) {
            final = llmAnswer;
        }
    } catch (e) {}

    // 🔥 پله ۴ — چندزبانه‌سازی خروجی تمدن
    try {
        final = await llm.ask(
            `پاسخ زیر را دقیقا به زبان ${base.frame.detectedLanguage} بازنویسی کن:\n\n${final}`
        );
    } catch (e) {}

    return {
        answer: final,
        meta: { channel, userId }
    };
};
EOM

# -----------------------------
# ری‌لود Mother Engine
# -----------------------------
echo "🔵 ری‌لود Mother Engine..."
node -e "delete require.cache['/nora/mother.js']"

# -----------------------------
# ری‌استارت سرویس تلگرام
# -----------------------------
echo "🔵 ری‌استارت سرویس تلگرام..."
systemctl restart nora-telegram.service

echo "🟢 پله‌های ۱ تا ۴ با موفقیت فعال شدند."
echo "🟢 تمدن NoraCivilis اکنون چندزبانه + چندلایه + تمدنی + LLM فعال است."
