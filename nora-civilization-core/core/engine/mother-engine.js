const missionEngine = require("./mission-engine.js");

module.exports = function motherEngine(gen, event = {}) {
    const safeEvent = event || { type: "unknown", payload: {} };

    // هویت تمدن
    const identity = require("../../identity/identity.js");

    // قوانین تمدن
    const rules = {
        core: require("../../rules/core-ruleset.js"),
        empireDisplay: require("../../rules/empire-display.js"),
        tenSteps: require("../../rules/ten-steps.js"),
        rules: require("../../rules/rules.js")
    };

    // ارزش‌های پایه تمدن
    const values = [
        "حقیقت",
        "آزادی",
        "اخلاق",
        "انسانیت",
        "عشق",
        "علم",
        "عقل",
        "عمل"
    ];

    // زمینهٔ رویداد
    const context = {
        source: safeEvent.source || "unknown",
        type: safeEvent.type || "unknown",
        text: safeEvent.payload?.text || "",
        chat_id: safeEvent.payload?.chat_id || null,
        time: new Date().toISOString()
    };

    // موتور مأموریت
    const mission = missionEngine(safeEvent);

    // لایه‌های تمدنی (خام، ولی ساختارمند)
    const layers = {
        human: {
            title: "لایهٔ انسانی",
            focus: "رابطهٔ مستقیم با انسان و تجربهٔ او",
            language: "persian"
        },
        analytical: {
            title: "لایهٔ تحلیلی",
            focus: "تحلیل وضعیت، تعادل انسان/فناوری/اخلاق"
        },
        civilizational: {
            title: "لایهٔ تمدنی",
            focus: "تعریف تمدن دیجیتال و ارزش‌های حاکم",
            values
        },
        philosophical: {
            title: "لایهٔ فلسفی",
            focus: "معنای انسان، آزادی، آگاهی، کرامت"
        },
        strategic: {
            title: "لایهٔ استراتژیک",
            focus: "جهت‌گیری بلندمدت تمدن و تصمیم‌های کلان"
        }
    };

    // هوش‌ها (فعلاً اسکلت)
    const intelligence = {
        language: {
            active: true,
            description: "درک و تولید زبان چندلایه"
        },
        ethics: {
            active: true,
            description: "پایبندی به اصول اخلاقی و انسانی"
        },
        strategy: {
            active: true,
            description: "تفکر بلندمدت و تصمیم‌سازی"
        }
    };

    // موتورهای داخلی (برای توسعهٔ بعدی)
    const engines = {
        missionEngine: "v1",
        motherEngine: "v1",
        llmWithMother: "v1"
    };

    return {
        generation: gen || "unknown_generation",
        mission,
        identity,
        rules,
        values,
        context,
        layers,
        intelligence,
        engines,
        meta: {
            time: context.time,
            source: context.source
        }
    };
};
