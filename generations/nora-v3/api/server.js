const http = require("http");
const router = require("./router");
const v3 = require("../server");
const mother = require("../modules/mother-intelligence/mother-intelligence");
const bridge = require("../modules/bridge/bridge");

v3.registerModule("motherIntelligence", mother);
v3.registerModule("bridge", bridge);

v3.initialize();
v3.start();

const server = http.createServer((req, res) => {
    let body = "";
    req.on("data", chunk => (body += chunk.toString()));
    req.on("end", () => router(req, res, body));
});

const PORT = process.env.V3_PORT || 3030;
server.listen(PORT, () => {
    console.log(JSON.stringify({
        status: "V3_API_SYNC_ENABLED",
        port: PORT
    }, null, 2));
});
