const heart = require("./heart");

heart.initialize();

const behavior = heart.behavior({
    stability: 0.9,
    systemLoad: 0.3,
    evolution: 0.8
});

console.log(JSON.stringify({
    status: "HEART_STAGE_6_OK",
    behavior
}, null, 2));
