const v3 = require("../../server");
const health = require("../../core/health/health");

module.exports = (req, res) => {
    const report = health.run(v3.core, v3.engine, v3.modules);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(report, null, 2));
};
