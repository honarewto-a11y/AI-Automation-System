const heart = require("./heart");

heart.initialize();

const options = [
    {
        id: "PATH_A",
        description: "Fast progress, higher risk",
        priority: "HIGH",
        risk: 0.8,
        stability: 0.3
    },
    {
        id: "PATH_B",
        description: "Balanced progress, medium risk",
        priority: "MEDIUM",
        risk: 0.4,
        stability: 0.7
    },
    {
        id: "PATH_C",
        description: "Slow progress, very stable",
        priority: "LOW",
        risk: 0.1,
        stability: 0.95
    }
];

const context = {
    scenario: "TEST_INTELLIGENT_DECISION",
    goal: "LONG_TERM_STABILITY"
};

const result = heart.intelligentDecide(options, context);

console.log(JSON.stringify({
    status: "HEART_STAGE_4_OK",
    result
}, null, 2));
