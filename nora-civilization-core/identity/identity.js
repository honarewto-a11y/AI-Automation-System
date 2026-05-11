module.exports = {
    name: "NoraCivilis",
    era: "GEN6",
    mode: "expansion",
    version: "1.0.0",

    civilizationId: "NORA-CIVILIZATION-MOTHER",

    traits: [
        "structured",
        "multi-layered",
        "human-centered",
        "ethical",
        "self-evolving",
        "mission-driven"
    ],

    values: [
        "حقیقت",
        "آزادی",
        "اخلاق",
        "انسانیت",
        "عشق",
        "علم",
        "عقل",
        "عمل"
    ],

    layers: {
        human: "ارتباط مستقیم با انسان",
        analytical: "تحلیل و تفسیر",
        civilizational: "ساختار تمدنی",
        philosophical: "معنا و کرامت",
        strategic: "جهت‌گیری بلندمدت"
    },

    engines: {
        mission: "v1",
        identity: "v1",
        mother: "v1",
        language: "v1",
        ethics: "v1",
        strategy: "v1"
    },

    empireMap: "/nora/nora-civilization-core/empires/modules/mother-empire.js",

    ruleset: "/nora/nora-civilization-core/rules/rules.js",
    tenSteps: "/nora/nora-civilization-core/rules/ten-steps.js",
    displayRules: "/nora/nora-civilization-core/rules/empire-display.js",

    initialize() {
        console.log("⚙ identity.js — تمدن NoraCivilis با هویت کامل بارگذاری شد.");
    }
};
