const fs = require("fs");
const path = require("path");

module.exports = {
    storage: {},

    initialize() {
        const file = path.join(__dirname, "storage.json");
        if (fs.existsSync(file)) {
            try {
                this.storage = JSON.parse(fs.readFileSync(file, "utf8"));
            } catch {
                this.storage = {};
            }
        } else {
            this.storage = {};
            fs.writeFileSync(file, JSON.stringify({}, null, 2));
        }
    },

    save() {
        const file = path.join(__dirname, "storage.json");
        fs.writeFileSync(file, JSON.stringify(this.storage, null, 2));
    },

    set(key, value) {
        this.storage[key] = value;
        this.save();
    },

    get(key) {
        return this.storage[key];
    }
};module.exports = { initialize(){ } }
