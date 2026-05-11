const express = require("express");

// هسته تمدن را لود می‌کنیم
require("./server.js");

const app = express();
app.use(express.json());

// API تست
app.get("/api/v1/identity", (req, res) => {
    return res.json(global.civilization.testIdentity());
});

// API تلگرام
app.post("/api/v1/telegram", (req, res) => {
    const { chat_id, text } = req.body;

    return res.json({
        reply: `پیام دریافت شد: ${text}`
    });
});

app.listen(4000, () => {
    console.log("🔥 NoraCivilis API Running on port 4000");
});
