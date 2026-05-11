// NoraCivilis – Minimal Stable Mother Engine (v1 Compatible)

const lang = require("/nora/v1/core/language/language-core.js");

module.exports = async function mother(payload) {
    const text = payload.text || "";

    // تحلیل زبان
    const interpreted = lang.interpretInput(text);
    const frame = lang.buildSemanticFrame(interpreted);

    // خروجی ساده و پایدار
    const response = `
🌐 NoraCivilis Response
-----------------------
📝 Input: ${text}

🔍 Interpreted:
${JSON.stringify(interpreted, null, 2)}

📘 Semantic Frame:
${JSON.stringify(frame, null, 2)}

⚙️ Status: OK
    `;

    return { answer: response };
};
