module.exports = {
    events: [],

    emit(event, data = {}) {
        this.events.push({ event, data, timestamp: Date.now() });
    }
};
