module.exports = {
    memory: {},

    initialize() {
        this.memory = {};
    },

    set(key, value) {
        this.memory[key] = value;
    },

    get(key) {
        return this.memory[key];
    }
};
