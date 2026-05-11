const mother = require("../../modules/mother-intelligence/mother-intelligence");
const v3 = require("../../server");

module.exports = (req, res, body) => {
    let input = "";
    try {
        const parsed = JSON.parse(body || "{}");
        input = parsed.input || "";
    } catch {
        input = "";
    }

    const result = mother.think(input, v3.core);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        status: "V3_THINK_ROUTE_OK",
        result
    }, null, 2));
};
