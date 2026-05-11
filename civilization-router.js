const mother = require("/nora/mother.js");

module.exports = async function civilizationRouter(payload) {
    try {
        const clean = {
            text: (payload.text || "").toString().trim(),
            userId: payload.userId || "unknown",
            channel: payload.channel || "unknown",
            update_id: payload.update_id || null,
            raw: payload
        };

        if (!clean.text) {
            return { answer: "⚠️ پیام خالی دریافت شد.", meta: { ok: false } };
        }

        if (clean.update_id && global.lastUpdateId === clean.update_id) {
            return { answer: null, meta: { ok: true, duplicate: true } };
        }
        global.lastUpdateId = clean.update_id;

        const result = await mother(clean);
        return result;

    } catch (err) {
        return {
            answer: "❌ خطا در Router تمدنی",
            meta: { ok: false, error: err.toString() }
        };
    }
};
