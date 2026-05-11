module.exports = {
    history: [],

    record(event, payload) {
        const entry = {
            event,
            payload,
            timestamp: Date.now(),
            type: "V3_SYNC_EVENT"
        };

        this.history.push(entry);
        return entry;
    },

    all() {
        return this.history;
    }
};
