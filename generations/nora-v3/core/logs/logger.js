module.exports = {
    logs: [],

    write(entry) {
        const log = {
            entry,
            timestamp: Date.now(),
            type: "V3_LOG"
        };

        this.logs.push(log);
        return log;
    },

    all() {
        return this.logs;
    }
};
