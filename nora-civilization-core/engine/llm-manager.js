/**
 * NoraCivilis – LLM Manager (Bridge to CORE/GEN7)
 * این لایه فقط درخواست را به LLM Manager اصلی در core/engine پاس می‌دهد.
 */

const coreLLMManager = require("/nora/nora-civilization-core/core/engine/llm-manager.js");

module.exports = {
    ask: async function(prompt, base) {
        return coreLLMManager.ask(prompt, base);
    }
};
