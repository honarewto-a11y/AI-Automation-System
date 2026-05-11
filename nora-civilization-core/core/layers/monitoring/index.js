const fs = require("fs");
const path = require("path");

module.exports = {
    logs: [],

    initialize() {
        const file = path.join(__dirname, "logs.json");

        if (fs.existsSync(file)) {
            try {
                this.logs = JSON.parse(fs.readFileSync(file, "utf8"));
            } catch {
                this.logs = [];
            }
        } else {
            this.logs = [];
            fs.writeFileSync(file, JSON.stringify([], null, 2));
        }
    },

    save() {
        const file = path.join(__dirname, "logs.json");
        fs.writeFileSync(file, JSON.stringify(this.logs, null, 2));
    },

    log(event, data = {}) {
        const entry = {
            event,
            data,
            timestamp: Date.now()
        };

        this.logs.push(entry);
        this.save();
    },

    getAll() {
        return this.logs;
    }
};module.exports = { initialize(){ } }
