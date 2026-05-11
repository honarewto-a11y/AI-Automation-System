const civilization = require("./server");

civilization.start();

const result = civilization.testIdentity();

console.log(JSON.stringify({
    status: "CIVILIZATION_CORE_TEST",
    identity: result,
    engineStarted: civilization.engine.state.started === true,
    timestamp: civilization.engine.state.timestamp,
    v2Connected: civilization.engine.state.v2 ? true : false
}, null, 2));
