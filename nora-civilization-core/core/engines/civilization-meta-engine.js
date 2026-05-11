const fs = require("fs");
const path = require("path");

module.exports = function civilizationMetaEngine(payload) {
    const stateDir = path.join(__dirname, "..", "state");
    const file = path.join(stateDir, "civilization-insights.json");

    const now = new Date().toISOString();
    const record = {
        time: now,
        diagnostic: payload.diagnostic,
        rootCause: payload.rootCause,
        optimization: payload.optimization,
        intelligence: payload.intelligence,
        expansion: payload.expansion,
        existence: payload.existence
    };

    let data = [];
    try {
        if (fs.existsSync(file)) {
            const raw = fs.readFileSync(file, "utf8");
            data = JSON.parse(raw || "[]");
        }
    } catch (_) {
        data = [];
    }

    data.push(record);

    try {
        fs.writeFileSync(file, JSON.stringify(data, null, 2), "utf8");
    } catch (e) {
        console.error("failed to write civilization-insights:", e.message);
    }

    return { stored: true, count: data.length };
};
