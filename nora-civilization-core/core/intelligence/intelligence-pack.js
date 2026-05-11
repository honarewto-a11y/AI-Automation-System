module.exports = function (gen, dir, fs, path) {

    const engines = {
        "mission-intelligence.js":      "module.exports={run(){return 'MISSION-INTELLIGENCE-" + gen + "'}};",
        "strategic-intelligence.js":    "module.exports={run(){return 'STRATEGIC-INTELLIGENCE-" + gen + "'}};",
        "tactical-intelligence.js":     "module.exports={run(){return 'TACTICAL-INTELLIGENCE-" + gen + "'}};",
        "ethical-intelligence.js":      "module.exports={run(){return 'ETHICAL-INTELLIGENCE-" + gen + "'}};",
        "identity-intelligence.js":     "module.exports={run(){return 'IDENTITY-INTELLIGENCE-" + gen + "'}};",
        "social-intelligence.js":       "module.exports={run(){return 'SOCIAL-INTELLIGENCE-" + gen + "'}};",
        "cultural-intelligence.js":     "module.exports={run(){return 'CULTURAL-INTELLIGENCE-" + gen + "'}};",
        "economic-intelligence.js":     "module.exports={run(){return 'ECONOMIC-INTELLIGENCE-" + gen + "'}};",
        "infrastructure-intelligence.js":"module.exports={run(){return 'INFRASTRUCTURE-INTELLIGENCE-" + gen + "'}};",
        "creative-intelligence.js":     "module.exports={run(){return 'CREATIVE-INTELLIGENCE-" + gen + "'}};",
        "philosophical-intelligence.js":"module.exports={run(){return 'PHILOSOPHICAL-INTELLIGENCE-" + gen + "'}};",
        "civilizational-intelligence.js":"module.exports={run(){return 'CIVILIZATIONAL-INTELLIGENCE-" + gen + "'}};"
    };

    for (const file in engines) {
        fs.writeFileSync(path.join(dir, file), engines[file]);
    }
};
