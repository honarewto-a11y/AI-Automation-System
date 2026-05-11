const sync = require("../../core/sync/sync");

module.exports = (req, res, body) => {
    let event = "";
    let payload = "";

    try {
        const parsed = JSON.parse(body || "{}");
        event = parsed.event || "";
        payload = parsed.payload || "";
    } catch {
        event = "";
        payload = "";
    }

    const result = sync.record(event, payload);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        status: "V3_SYNC_RECORD_OK",
        result
    }, null, 2));
};
