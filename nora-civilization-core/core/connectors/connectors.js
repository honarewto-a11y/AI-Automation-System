const fs = require("fs");
const path = require("path");

module.exports = {
    connectors: {},

    initialize() {
        const dir = path.join(__dirname, "modules");

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        const files = fs.readdirSync(dir);

        files.forEach(file => {
            if (file.endsWith(".js")) {
                const name = file.replace(".js", "");
                try {
                    this.connectors[name] = require(path.join(dir, file));
                    if (typeof this.connectors[name].initialize === "function") {
                        this.connectors[name].initialize();
                    }
                } catch (e) {}
            }
        });
    },

    get(name) {
        return this.connectors[name];
    }
};module.exports = { initialize(){ } }
