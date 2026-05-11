module.exports = {
    state: {
        uptimeStart: null,
        totalCycles: 0,
        lastCycle: null
    },

    initialize() {
        this.state.uptimeStart = Date.now();
        this.state.totalCycles = 0;
        this.state.lastCycle = null;
    },

    update(cycle) {
        this.state.totalCycles++;
        this.state.lastCycle = cycle;
    },

    report() {
        return {
            uptime: Date.now() - this.state.uptimeStart,
            totalCycles: this.state.totalCycles,
            lastCycle: this.state.lastCycle
        };
    }
};
