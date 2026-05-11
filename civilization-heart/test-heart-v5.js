const heart = require("./heart");

heart.initialize();

const options = [
    { id: "A", priority: "HIGH", risk: 0.6, stability: 0.4 },
    { id: "B", priority: "MEDIUM", risk: 0.3, stability: 0.8 }
];

const context = {
    scenario: "TEST_RULE_INTEGRATION",
    goal: "CIVILIZATIONAL_ALIGNMENT"
};

const result = heart.intelligentDecide(options, context);

console.log(JSON.stringify({
    status: "HEART_STAGE_5_OK",
    rulesLoaded: heart.state.rules,
    result
}, null, 2));
