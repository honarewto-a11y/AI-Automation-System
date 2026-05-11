const fs = require("fs");
const path = require("path");

const TEMPLATES = {
    "llm-with-mother.js": `const axios = require("axios");
const autoRepairLayer = require("./auto-repair-layer");

module.exports = async function generateWithMother(state) {
    const text = state?.context?.text?.trim() || "";

    if (!text) {
        return "سلام… من اینجام. هرچه می‌خواهی بپرس.";
    }

    try {
        const response = await axios.post("http://localhost:11434/api/generate", {
            model: "llama3:latest",
            prompt: text,
            stream: false
        });

        const answer = response.data?.response;

        if (!answer) {
            throw new Error("MODEL_RESPONSE_EMPTY");
        }

        return answer.trim();
    } catch (error) {
        const auto = autoRepairLayer(error, {
            source: "llm-with-mother",
            input: text
        });

        return [
            "⚠️ تمدن در پاسخ‌گویی دچار مشکل شد.",
            \`📍 ناحیهٔ احتمالی مشکل: \${auto.rootCause.area}\`,
            \`🧩 علت احتمالی: \${auto.rootCause.reason}\`,
            \`🛠 پیشنهاد ترمیم: \${auto.healing.hint}\`
        ].join("\\n");
    }
};
`
};

module.exports = function reconstructionEngine(rootCause) {
    const results = [];

    // نمونه: اگر مشکل از llm باشد، فایل llm-with-mother.js را بازسازی کن
    if (rootCause.area === "ollama" || rootCause.area === "unknown") {
        const target = path.join(__dirname, "../engine/llm-with-mother.js");
        try {
            if (!fs.existsSync(target) || fs.readFileSync(target, "utf8").trim().length === 0) {
                fs.writeFileSync(target, TEMPLATES["llm-with-mother.js"], "utf8");
                results.push("فایل llm-with-mother.js بازسازی شد.");
            }
        } catch (e) {
            results.push("خطا در بازسازی llm-with-mother.js: " + e.message);
        }
    }

    return results;
};
