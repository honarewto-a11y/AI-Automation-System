const heart = require("./heart");

heart.initialize();

const packet = heart.gen5({
    memoryCount: 120,
    behaviorMode: "EVOLVING",
    stability: 0.85,
    evolution: 0.9
});

console.log(JSON.stringify({
    status: "HEART_STAGE_7_OK",
    packet
}, null, 2));
