const v3 = require("../../server");

module.exports = (req, res) => {
    const report = v3.core.state.report();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        status: "V3_STATE_OK",
        report
    }, null, 2));
};
