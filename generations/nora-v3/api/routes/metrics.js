const metrics = require("../../core/metrics/metrics");

module.exports = (req, res) => {
    const report = metrics.report();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(report, null, 2));
};
