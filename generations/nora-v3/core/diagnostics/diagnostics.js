module.exports = {
    report(core, engine, modules) {
        return {
            status: "V3_DIAGNOSTICS_OK",
            timestamp: Date.now(),
            core: {
                runtimeStarted: core.runtime.state.started,
                memoryKeys: Object.keys(core.memory.memory || {}).length,
                dataKeys: Object.keys(core.data.storage || {}).length,
                securityReady: core.security.initialized,
                languageReady: core.language.initialized,
                thinkingCycles: core.thinking.cycles.length
            },
            engine: {
                started: engine.state.started,
                modules: Object.keys(modules)
            }
        };
    }
};
