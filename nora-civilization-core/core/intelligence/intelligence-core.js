const fs = require("fs");
const path = require("path");

module.exports = function loadIntelligence(genPath) {

    const engines = [
        "mission-intelligence.js",
        "strategic-intelligence.js",
        "tactical-intelligence.js",
        "ethical-intelligence.js",
        "identity-intelligence.js",
        "social-intelligence.js",
        "cultural-intelligence.js",
        "economic-intelligence.js",
        "infrastructure-intelligence.js",
        "creative-intelligence.js",
        "philosophical-intelligence.js",
        "civilizational-intelligence.js"
    ];

    const results = {};

    engines.forEach(engine => {
        const file = path.join(genPath, engine);
        if (fs.existsSync(file)) {
            const mod = require(file);
            results[engine.replace(".js","")] = mod.run();
        }
    });

    return results;
};
