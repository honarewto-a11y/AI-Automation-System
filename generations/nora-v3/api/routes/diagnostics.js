const v3 = require("../../server");
const diagnostics = require("../../core/diagnostics/diagnostics");

module.exports = (req, res) => {
    const report = diagnostics.report(v3.core, v3.engine, v3.modules);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(report, null, 2));
};
