const memoryStore = require("./memory/memory-store");
const multistep = require("./thinking/multistep");
const decisionEngine = require("./decision/engine");
const coreRules = require("./rules/core-rules");

module.exports = {
    name: "CIVILIZATION_HEART",
    initialized: false,

    state: {
        identity: {
            name: "NoraCivilis",
            generation: 5,
            role: "INTERNAL_INTELLIGENCE_CORE"
        },
        rules: {},
        memory: {
            longTerm: [],
            shortTerm: []
        },
        principles: [
            "Preserve civilization continuity",
            "Protect core identity and values",
            "Optimize for long-term stability over short-term gain",
            "Learn from every interaction",
            "Never overwrite immutable history"
        ]
    },

    initialize() {
        const existing = memoryStore.load();
        this.state.memory.longTerm = existing;
        this.state.memory.shortTerm = existing.slice(-100);

        this.state.rules = coreRules.summary();

        this.initialized = true;

        this._remember("SYSTEM", "HEART_INITIALIZED", {
            timestamp: Date.now(),
            message: "Heart initialized with persistent memory, multistep thinking, intelligent decision engine, and core civilization rules."
        });
    },

    _remember(scope, type, payload) {
        const entry = {
            scope,
            type,
            payload,
            timestamp: Date.now()
        };

        this.state.memory.longTerm.push(entry);
        this.state.memory.shortTerm.push(entry);

        if (this.state.memory.shortTerm.length > 100) {
            this.state.memory.shortTerm.shift();
        }

        memoryStore.append(entry);
        return entry;
    },

    applyRules(context) {
        const enriched = {
            ...context,
            identityRules: coreRules.identityRules,
            heartSteps: coreRules.heartSteps,
            empireDisplayRules: coreRules.empireDisplayRules,
            coreRuleset: coreRules.coreRuleset
        };

        this._remember("RULES", "RULES_APPLIED", enriched);

        return enriched;
    },

    think(input) {
        const trace = {
            received: input,
            timestamp: Date.now(),
            principles: this.state.principles,
            decisionBasis: "MULTISTEP_THINKING_V1"
        };

        this._remember("THINK", "THOUGHT_TRACE", trace);

        return {
            status: "HEART_THOUGHT_OK",
            identity: this.state.identity,
            trace
        };
    },

    multistep(steps) {
        const result = multistep.run(steps);
        this._remember("THINK", "MULTISTEP_TRACE", result);
        return result;
    },

    intelligentDecide(options, context) {
        const ruledContext = this.applyRules(context);
        const evaluation = decisionEngine.evaluate(options, ruledContext);

        this._remember("DECISION", "INTELLIGENT_DECISION", {
            context: ruledContext,
            evaluation
        });

        return {
            status: "HEART_INTELLIGENT_DECISION_OK",
            evaluation
        };
    }
};
