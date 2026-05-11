const express = require("express");
const bus = require("../eventbus/main");
const intelligence = require("../intelligence/main");
const oversoul = require('./oversoul');
global.civilization = { gatewayEngine: require("/nora/gateway/engine") };
const builder = require("../builder/main");
const core = require("../core/main");

const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// فعال‌سازی لایه‌ها
intelligence.start();
builder.start();

app.get("/", (req, res) => {
    res.json({
        status: "NoraCivilis V2 API Active",
        time: new Date().toISOString()
    });
});

app.post("/command", (req, res) => {
    const action = req.body.action;
    bus.emit("command", { action });
    res.json({ ok: true, received: action });
});

app.use("/gateway/select-country", require("/nora/gateway/api/selectCountry"));
app.use("/gateway/welcome", require("/nora/gateway/api/welcome"));
app.use("/gateway/gate", require("/nora/gateway/api/gate"));
app.use("/gateway/register", require("/nora/gateway/api/register"));
app.use("/gateway/login", require("/nora/gateway/api/login"));
app.use("/gateway/wallet", require("/nora/gateway/api/wallet"));
app.use("/gateway/payment", require("/nora/gateway/api/payment"));
app.use("/gateway/chat", require("/nora/gateway/api/chat"));

app.listen(port, "0.0.0.0", () => {
    console.log("NoraCivilis V2 API running on port " + port);
});
