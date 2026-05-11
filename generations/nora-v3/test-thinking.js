const v3 = require("./server");
const mother = require("./modules/mother-intelligence/mother-intelligence");

v3.registerModule("motherIntelligence", mother);

v3.initialize();
v3.start();

const result = mother.think("HELLO_CIVILIZATION", v3.core);

console.log(JSON.stringify({
    status: "THINKING_TEST",
    motherInitialized: mother.initialized,
    coreCycle: result.coreCycle,
    motherResponse: result
}, null, 2));
