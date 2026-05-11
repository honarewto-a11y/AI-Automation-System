const eventbus = require("../../core/events/eventbus");

module.exports = (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        status: "V3_EVENTS_OK",
        events: eventbus.all()
    }, null, 2));
};
