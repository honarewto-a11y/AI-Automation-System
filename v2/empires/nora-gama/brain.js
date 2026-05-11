const llm = require('/nora/nora-civilization-core/engine/llm-engine.js');
const intentEngine = require('/nora/nora-civilization-core/engine/intent-engine.js');

async function handleMessage(bot, msg) {
    const text = (msg.text || "").toString().trim();
    if (!text) return null;

    const intent = intentEngine.detectIntent(text);
    const quick = intentEngine.answerForIntent(intent, text);

    // اگر جواب ریشه‌ای داریم، اصلاً سمت LLM نمی‌رویم
    if (quick) return quick;

    // فقط برای چیزهای واقعاً تحلیلی/پیچیده
    const context = {
        topic: "",
        persona: {
            weights: {
                human: 0.7,
                scholar: 0.2,
                civilization: intent.type === "philosophy" ? 0.4 : 0.1
            }
        }
    };

    const answer = await llm.generate(text, context);
    return answer || "الان نتونستم جواب خوبی بسازم، می‌خوای یه جور دیگه بپرسی؟";
}

module.exports = { handleMessage };
