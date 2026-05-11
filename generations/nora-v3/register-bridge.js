const v3 = require("./server");
const bridge = require("./modules/bridge/bridge");

v3.registerModule("bridge", bridge);

v3.initialize();
v3.start();

console.log(JSON.stringify({
    status: "BRIDGE_REGISTERED",
    initialized: bridge.initialized === true
}, null, 2));
