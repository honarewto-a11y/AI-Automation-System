const fs = require("fs");
const path = require("path");

module.exports = {
    versions: [],

    initialize() {
        const file = path.join(__dirname, "versions.json");

        if (fs.existsSync(file)) {
            try {
                this.versions = JSON.parse(fs.readFileSync(file, "utf8"));
            } catch {
                this.versions = [];
            }
        } else {
            this.versions = [];
            fs.writeFileSync(file, JSON.stringify([], null, 2));
        }
    },

    save() {
        const file = path.join(__dirname, "versions.json");
        fs.writeFileSync(file, JSON.stringify(this.versions, null, 2));
    },

    add(version) {
        this.versions.push({
            version,
            timestamp: Date.now()
        });
        this.save();
    },

    list() {
        return this.versions;
    }
};
