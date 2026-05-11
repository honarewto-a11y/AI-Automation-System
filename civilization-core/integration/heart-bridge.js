const heart = require("/nora/civilization-heart/heart");

module.exports = {
    initialized: false,

    init() {
        heart.initialize();
        this.initialized = true;
        return {
            status: "HEART_BRIDGE_INITIALIZED",
            timestamp: Date.now()
        };
    },

    process(input) {
        const enriched = heart.applyRules(input);

        const thought = heart.think(enriched);

        const decision = heart.intelligentDecide(
            input.options || [],
            enriched
        );

        return {
            status: "HEART_BRIDGE_PROCESS_OK",
            enriched,
            thought,
            decision
        };
    }
};
