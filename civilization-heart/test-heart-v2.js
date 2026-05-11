const heart = require("./heart");
const store = require("./memory/memory-store");

heart.initialize();

heart.remember("TEST_MEMORY", {
    message: "LONG_TERM_MEMORY_STAGE_2",
    level: "TEST"
});

const thought = heart.think({
    message: "CHECK_LTM_INTEGRATION",
    level: "SYSTEM"
});

const decision = heart.decide({
    action: "VERIFY_LONG_TERM_MEMORY",
    priority: "HIGH"
});

console.log(JSON.stringify({
    status: "HEART_STAGE_2_OK",
    initialized: heart.initialized,
    snapshot: heart.snapshot(),
    storageFile: store.file,
    thought,
    decision
}, null, 2));
