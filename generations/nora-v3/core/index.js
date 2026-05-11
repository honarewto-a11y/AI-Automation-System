module.exports = {
    runtime: require("./runtime/runtime"),
    memory: require("./memory/memory"),
    security: require("./security/security"),
    data: require("./data/data"),
    events: require("./events/events"),
    language: require("./language/language"),
    thinking: require("./thinking/thinking"),
    state: require("./state/state"),

    initializeAll() {
        this.runtime.initialize();
        this.memory.initialize();
        this.security.initialize();
        this.data.initialize();
        this.language.initialize();
        this.thinking.initialize();
        this.state.initialize();
    }
};
