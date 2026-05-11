module.exports = {
    name: "V2_V3_BRIDGE",
    initialized: false,

    initialize() {
        this.initialized = true;
    },

    transfer(input) {
        return {
            from: "v2",
            to: "v3",
            payload: input,
            timestamp: Date.now(),
            type: "BRIDGE_TRANSFER"
        };
    }
};
