const llm = require("./llm-gateway.js");

module.exports = {
    generate: async function(prompt) {
        return await llm.generate(prompt);
    }
};
