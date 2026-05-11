const axios = require("axios");

const BOT_TOKEN = null;
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

module.exports = async ({ channel, user_id, message, meta }) => {
    try {
        const r = await axios.post(TELEGRAM_API, {
            chat_id: -1003776677784,
            text: message
        });

        console.log("TELEGRAM_OK:", r.data);
        return { ok: true };

    } catch (e) {
        console.log("TELEGRAM_ERROR:", e.response?.data || e.message);
        return { ok: false, error: "telegram_failed" };
    }
};
