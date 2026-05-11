module.exports = {
    events: [],

    emit(type, payload) {
        const event = {
            type,
            payload,
            timestamp: Date.now()
        };

        this.events.push(event);
        return event;
    },

    all() {
        return this.events;
    }
};
