module.exports = {
    init: (context) => {
        console.log("🧠 Behavior Engine: initialized.");
        console.log("   Civilization:", context.identity.civilization);
        console.log("   Generation:", context.identity.generation);
    },
    runOnce: (context) => {
        console.log("🧠 Behavior Engine: running one behavior cycle...");
        console.log("   Rules dignityFirst:", context.rules.dignityFirst);
        console.log("   Layers available:", context.layers.length);
        console.log("   → Example decision: maintain stability and observe.");
    }
};
