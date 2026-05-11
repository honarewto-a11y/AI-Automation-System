const memoryLog = [];

module.exports = {
    init: (context) => {
        console.log("🧱 Long-Term Memory Engine: initialized.");
        console.log("   Version context:", context.versioning.current || "v0.0.1");
    },
    recordEvent: (event) => {
        memoryLog.push({
            ...event,
            at: new Date().toISOString()
        });
        console.log("🧱 Long-Term Memory: recorded event:", event.type || "unknown");
    },
    getSnapshot: () => {
        return {
            count: memoryLog.length,
            last: memoryLog[memoryLog.length - 1] || null
        };
    }
};
