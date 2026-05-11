const eventbus = require("../../core/events/eventbus");

module.exports = (req, res, body) => {
    let type = "";
    let payload = "";

    try {
        const parsed = JSON.parse(body || "{}");
        type = parsed.type || "";
        payload = parsed.payload || "";
    } catch {
        type = "";
        payload = "";
    }

    const result = eventbus.emit(type, payload);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        status: "V3_EVENT_EMIT_OK",
        result
    }, null, 2));
};
