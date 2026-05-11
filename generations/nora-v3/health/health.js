module.exports = {
    check(v3) {
        return {
            status: "V3_HEALTH_OK",
            timestamp: Date.now(),
            runtimeStarted: v3.core.runtime.state.started === true,
            memoryReady: typeof v3.core.memory.set === "function",
            dataReady: typeof v3.core.data.set === "function",
            securityReady: v3.core.security.initialized === true,
            languageReady: v3.core.language.initialized === true,
            engineStarted: v3.engine.state.started === true,
            modules: Object.keys(v3.modules)
        };
    }
};
