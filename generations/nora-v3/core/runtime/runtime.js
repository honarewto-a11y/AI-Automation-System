module.exports = {
    state: {
        started: false,
        timestamp: null
    },

    initialize() {
        this.state.timestamp = Date.now();
    },

    start() {
        this.state.started = true;
    }
};
