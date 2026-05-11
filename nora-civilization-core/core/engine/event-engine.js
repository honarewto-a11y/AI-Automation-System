const motherEngine = require("./mother-engine.js");
const generateWithMother = require("./llm-with-mother.js");

module.exports = async function handleEvent(generation, event) {
    const civilizationState = motherEngine(generation, event);
    const llmOutput = await generateWithMother(civilizationState);
    return {
        state: civilizationState,
        llmOutput
    };
};
