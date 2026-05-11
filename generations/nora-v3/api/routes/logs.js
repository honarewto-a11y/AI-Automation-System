const logger = require("../../core/logs/logger");

module.exports = (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        status: "V3_LOGS_OK",
        logs: logger.all()
    }, null, 2));
};
