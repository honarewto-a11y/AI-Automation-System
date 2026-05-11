const { spawnSync } = require("child_process");

async function generate(userText, context = {}) {
    const input = (userText || "").trim();
    if (!input) return "ورودی خالی است.";

    const model = "llama3";

    const prompt = `
You are NoraCivilis LLM.
User: ${input}

Context:
${JSON.stringify(context, null, 2)}
`;

    try {
        const res = spawnSync("ollama", ["run", model], {
            input: prompt,
            encoding: "utf8",
            maxBuffer: 1024 * 1024
        });

        if (res.error) {
            return "خطا در اجرای Ollama: " + res.error.message;
        }

        const out = (res.stdout || "").trim();
        if (!out) {
            return "پاسخی از مدل Ollama دریافت نشد.";
        }

        return out;
    } catch (e) {
        return "خطا در ارتباط با مدل LLM (Ollama): " + (e.message || "خطای نامشخص");
    }
}

module.exports = { generate };
