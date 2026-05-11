
const fs = require("fs");
const path = require("path");

const engine = {
    state: {
        started: false,
        timestamp: null,
        modules: {},
        v2: null
    },

    loadModules() {
        const modulesPath = path.join(__dirname, "modules");
        if (!fs.existsSync(modulesPath)) return;

        const files = fs.readdirSync(modulesPath);
        files.forEach(file => {
            if (file.endsWith(".js")) {
                const name = file.replace(".js", "");
                this.state.modules[name] = require(path.join(modulesPath, file));
            }
        });
    },

    connectV2() {
        const v2Path = "/nora/nora-v2/server.js";
        if (fs.existsSync(v2Path)) {
            try {
                this.state.v2 = require(v2Path);
            } catch {
                this.state.v2 = null;
            }
        }
    },

    start() {
        if (this.state.started) return;

        this.state.timestamp = Date.now();

        this.loadModules();
        this.connectV2();

        Object.values(this.state.modules).forEach(m => {
            if (typeof m.initialize === "function") m.initialize();
        });

        if (this.state.v2 && typeof this.state.v2.initialize === "function") {
            this.state.v2.initialize();
        }

        this.state.started = true;
    }
};

module.exports = engine;
