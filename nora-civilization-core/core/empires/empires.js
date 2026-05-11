const fs = require("fs");
const path = require("path");

module.exports = {
    list: {},

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
                    this.list[name] = require(path.join(dir, file));
                    if (typeof this.list[name].initialize === "function") {
                        this.list[name].initialize();
                    }
                } catch (e) {}
            }
        });
    },

    get(name) {
        return this.list[name];
    }
};
