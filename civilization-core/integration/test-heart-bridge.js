const bridge = require("./heart-bridge");

bridge.init();

const result = bridge.process({
    scenario: "HEART_INTEGRATION_TEST",
    goal: "SYSTEM_ALIGNMENT",
    options: [
        { id: "A", priority: "HIGH", risk: 0.4, stability: 0.7 },
        { id: "B", priority: "LOW", risk: 0.1, stability: 0.9 }
    ]
});

console.log(JSON.stringify({
    status: "HEART_INTEGRATION_OK",
    result
}, null, 2));
