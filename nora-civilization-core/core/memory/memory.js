const fs = require("fs");
const path = require("path");

module.exports = {
    memory: {},

    initialize() {
        const file = path.join(__dirname, "memory.json");

        if (fs.existsSync(file)) {
            try {
                this.memory = JSON.parse(fs.readFileSync(file, "utf8"));
            } catch {
                this.memory = {};
            }
        } else {
            this.memory = {};
            fs.writeFileSync(file, JSON.stringify({}, null, 2));
        }
    },

    save() {
        const file = path.join(__dirname, "memory.json");
        fs.writeFileSync(file, JSON.stringify(this.memory, null, 2));
    },

    set(key, value) {
        this.memory[key] = value;
        this.save();
    },

    get(key) {
        return this.memory[key];
    },

    remove(key) {
        delete this.memory[key];
        this.save();
    }
};module.exports = { initialize(){ } }
