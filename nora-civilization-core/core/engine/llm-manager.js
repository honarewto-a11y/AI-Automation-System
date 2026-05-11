const engine = require("./llm-engine.js");
const formatter = require("./llm-formatter.js");

async function ask(userText, context = {}) {
    const raw = await engine.generate(userText, context);
    const formatted = formatter.format(raw, context);
    return formatted || null;
}

module.exports = { ask };
