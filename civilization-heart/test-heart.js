const heart = require("./heart");

heart.initialize();

const thought = heart.think({
    message: "BOOTSTRAP_CIVILIZATION_HEART",
    level: "SYSTEM"
});

const decision = heart.decide({
    action: "START_GENERATION_5_PREPARATION",
    priority: "HIGH"
});

console.log(JSON.stringify({
    status: "HEART_CORE_OK",
    initialized: heart.initialized,
    thought,
    decision
}, null, 2));
