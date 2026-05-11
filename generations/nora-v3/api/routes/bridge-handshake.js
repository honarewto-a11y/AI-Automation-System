module.exports = (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        status: "V3_BRIDGE_HANDSHAKE_OK",
        handshake: "V2→V3_LINK_CONFIRMED",
        timestamp: Date.now()
    }, null, 2));
};
