module.exports = {
    name: "Meta-Intelligence Layer",
    type: "META_INTELLIGENCE_LAYER",
    version: 1,
    monitors: [],
    optimizers: [],
    registerMonitor(m) {
        this.monitors.push(m);
        return m;
    },
    registerOptimizer(o) {
        this.optimizers.push(o);
        return o;
    }
};
