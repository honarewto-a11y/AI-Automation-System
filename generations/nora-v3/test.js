const v3 = require("./server");

v3.initialize();
v3.start();

console.log(JSON.stringify({
    status: "V3_CORE_TEST",
    runtimeStarted: v3.core.runtime.state.started === true,
    runtimeTimestamp: v3.core.runtime.state.timestamp,
    memoryReady: typeof v3.core.memory.set === "function",
    dataReady: typeof v3.core.data.set === "function",
    securityReady: v3.core.security.initialized === true,
    languageReady: v3.core.language.initialized === true
}, null, 2));
