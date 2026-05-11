const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Gmail → اینجا ایمیل را POST می‌کند
app.post("/gmail", async (req, res) => {
  const text = req.body.text || req.body.body || "";
  const meta = req.body.meta || {};

  try {
    await axios.post("http://localhost:4000/email/incoming", {
      text,
      meta
    });
  } catch (e) {
    console.log("Forward error:", e.message);
  }

  return res.json({ ok: true });
});

app.listen(5001, () => console.log("Gmail Gateway running on 5001"));
