const bridge = require("../../modules/bridge/bridge");

module.exports = (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        status: "V3_BRIDGE_STATUS_OK",
        initialized: bridge.initialized === true,
        name: bridge.name,
        timestamp: Date.now()
    }, null, 2));
};
