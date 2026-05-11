module.exports = {
    checks: [],

    run(core, engine, modules) {
        const report = {
            status: "V3_HEALTH_OK",
            timestamp: Date.now(),
            core: {
                runtime: core.runtime.state.started,
                memory: typeof core.memory.set === "function",
                data: typeof core.data.set === "function",
                security: core.security.initialized,
                language: core.language.initialized,
                thinking: core.thinking.cycles.length
            },
            engine: {
                started: engine.state.started,
                modules: Object.keys(modules)
            }
        };

        this.checks.push(report);
        return report;
    }
};
