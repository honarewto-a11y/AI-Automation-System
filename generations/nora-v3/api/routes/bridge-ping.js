module.exports = (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        status: "V3_BRIDGE_PING_OK",
        message: "BRIDGE_IS_ALIVE",
        timestamp: Date.now()
    }, null, 2));
};
