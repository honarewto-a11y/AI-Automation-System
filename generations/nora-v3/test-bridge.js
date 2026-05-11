const v3 = require("./server");
const bridge = require("./modules/bridge/bridge");

v3.registerModule("bridge", bridge);

v3.initialize();
v3.start();

const result = bridge.transfer("TEST_PAYLOAD");

console.log(JSON.stringify({
    status: "BRIDGE_TEST_OK",
    result
}, null, 2));
