const logger = require("../../core/logs/logger");

module.exports = (req, res, body) => {
    let entry = "";
    try {
        const parsed = JSON.parse(body || "{}");
        entry = parsed.entry || "";
    } catch {
        entry = "";
    }

    const result = logger.write(entry);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        status: "V3_LOG_WRITE_OK",
        result
    }, null, 2));
};
