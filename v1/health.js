const fs = require("fs");
const path = require("path");

module.exports = async function civilizationHealth() {
    const health = {
        civilization: "NoraCivilis",
        version: "v1",
        timestamp: new Date().toISOString(),
        layers: {},
        lastError: null
    };

    const layers = [
        "feedback",
        "evolution",
        "analysis",
        "decision",
        "action",
        "civilizational"
    ];

    for (const layer of layers) {
        try {
            const engine = require(`./layers/${layer}-engine.js`);
            const status = await engine.health();

            health.layers[layer] = {
                success: true,
                status
            };
        } catch (err) {
            health.layers[layer] = {
                success: false,
                error: err.message
            };
            health.lastError = err.message;
        }
    }

    return health;
};
