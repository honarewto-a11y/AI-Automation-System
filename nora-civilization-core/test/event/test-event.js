const handleEvent = require("../../core/engine/event-engine.js");

(async () => {
    console.log("⏳  Sending test event to civilization...");

    const result = await handleEvent("test_event", {
        type: "test",
        payload: {
            message: "Hello from test"
        },
        source: "test-script",
        time: new Date().toISOString()
    });

    console.log("✅  EVENT RESULT:");
    console.log(result);
})();
