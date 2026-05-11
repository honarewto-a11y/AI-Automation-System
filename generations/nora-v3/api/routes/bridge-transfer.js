const bridge = require("../../modules/bridge/bridge");
const v3 = require("../../server");

module.exports = (req, res, body) => {
    let payload = "";
    try {
        const parsed = JSON.parse(body || "{}");
        payload = parsed.payload || "";
    } catch {
        payload = "";
    }

    const result = bridge.transfer(payload);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        status: "V3_BRIDGE_TRANSFER_OK",
        result
    }, null, 2));
};
