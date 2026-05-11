const engine = require("./engine/engine");
const core = require("./core/index");

const v3 = {
    engine,
    core,
    modules: {},

    registerModule(name, mod) {
        this.modules[name] = mod;
    },

    initialize() {
        this.engine.initialize(this.modules);
    },

    start() {
        this.engine.start();
    }
};

module.exports = v3;
