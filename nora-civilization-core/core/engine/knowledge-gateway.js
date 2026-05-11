const kb = require("./knowledge-base");
const adv = require("./knowledge-advanced");

module.exports = {
    answer(input, interp) {
        const text = (input || "").toString().trim();
        if (!text) return "ورودی خالی است.";

        if (interp.type === "question") {

            // 1) دانش پیشرفته
            const fromAdv = adv.answer(text);
            if (fromAdv) return fromAdv;

            // 2) دانش پایه
            const fromKB = kb.answer(text);
            if (fromKB) return fromKB;

            return "این پرسش فراتر از دانش فعلی تمدن است.";
        }

        if (interp.type === "statement") {
            return "پیام شما دریافت شد.";
        }

        return null;
    }
};
