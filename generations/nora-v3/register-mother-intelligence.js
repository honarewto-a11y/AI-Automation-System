const v3 = require("./server");
const motherIntelligence = require("./modules/mother-intelligence/mother-intelligence");

v3.registerModule("motherIntelligence", motherIntelligence);

v3.initialize();
v3.start();

console.log(JSON.stringify({
    status: "MOTHER_INTELLIGENCE_REGISTERED",
    initialized: motherIntelligence.initialized === true
}, null, 2));
