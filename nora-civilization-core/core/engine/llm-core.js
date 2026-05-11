const gateway = require("./llm-gateway.js");

async function runLLM(prompt) {
    if (!prompt || !prompt.toString().trim()) return null;
    return await gateway.answer(prompt);
}

module.exports = { runLLM };
