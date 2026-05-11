module.exports = {
    storage: {},

    initialize() {
        this.storage = {};
    },

    set(key, value) {
        this.storage[key] = value;
    },

    get(key) {
        return this.storage[key];
    }
};
