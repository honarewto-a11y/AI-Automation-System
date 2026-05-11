const sync = require("../../core/sync/sync");

module.exports = (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        status: "V3_SYNC_HISTORY_OK",
        history: sync.all()
    }, null, 2));
};
