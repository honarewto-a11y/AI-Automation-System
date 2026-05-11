const thinkRoute = require("./routes/think");
const bridgeRoute = require("./routes/bridge-transfer");
const bridgeStatus = require("./routes/bridge-status");
const bridgePing = require("./routes/bridge-ping");
const bridgeHandshake = require("./routes/bridge-handshake");
const diagnosticsRoute = require("./routes/diagnostics");
const healthRoute = require("./routes/health");
const logsRoute = require("./routes/logs");
const logWriteRoute = require("./routes/log-write");
const stateRoute = require("./routes/state");
const metricsRoute = require("./routes/metrics");
const eventsRoute = require("./routes/events");
const eventEmitRoute = require("./routes/event-emit");
const syncRoute = require("./routes/sync");
const syncRecordRoute = require("./routes/sync-record");

const metrics = require("../core/metrics/metrics");

module.exports = (req, res, body) => {
    metrics.record(
        req.url.includes("think") ? "think" :
        req.url.includes("bridge") ? "bridge" :
        req.url.includes("event") ? "event" :
        req.url.includes("sync") ? "sync" :
        "other"
    );

    if (req.method === "POST" && req.url === "/v3/think") return thinkRoute(req, res, body);
    if (req.method === "POST" && req.url === "/v3/bridge/transfer") return bridgeRoute(req, res, body);

    if (req.method === "GET" && req.url === "/v3/bridge/status") return bridgeStatus(req, res);
    if (req.method === "GET" && req.url === "/v3/bridge/ping") return bridgePing(req, res);
    if (req.method === "GET" && req.url === "/v3/bridge/handshake") return bridgeHandshake(req, res);

    if (req.method === "GET" && req.url === "/v3/diagnostics") return diagnosticsRoute(req, res);
    if (req.method === "GET" && req.url === "/v3/health") return healthRoute(req, res);

    if (req.method === "GET" && req.url === "/v3/logs") return logsRoute(req, res);
    if (req.method === "POST" && req.url === "/v3/logs/write") return logWriteRoute(req, res, body);

    if (req.method === "GET" && req.url === "/v3/state") return stateRoute(req, res);
    if (req.method === "GET" && req.url === "/v3/metrics") return metricsRoute(req, res);

    if (req.method === "GET" && req.url === "/v3/events") return eventsRoute(req, res);
    if (req.method === "POST" && req.url === "/v3/events/emit") return eventEmitRoute(req, res, body);

    if (req.method === "GET" && req.url === "/v3/sync") return syncRoute(req, res);
    if (req.method === "POST" && req.url === "/v3/sync/record") return syncRecordRoute(req, res, body);

    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "NOT_FOUND" }));
};
