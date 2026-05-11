module.exports = {
    metrics: {
        totalRequests: 0,
        thinkRequests: 0,
        bridgeTransfers: 0,
        lastRequest: null
    },

    record(type) {
        this.metrics.totalRequests++;
        this.metrics.lastRequest = {
            type,
            timestamp: Date.now()
        };

        if (type === "think") this.metrics.thinkRequests++;
        if (type === "bridge") this.metrics.bridgeTransfers++;
    },

    report() {
        return {
            status: "V3_METRICS_OK",
            timestamp: Date.now(),
            ...this.metrics
        };
    }
};
