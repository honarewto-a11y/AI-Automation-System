const heart = require("/nora/civilization-heart/heart");

const metaIntelligence = require("/nora/civilization-core/layers/meta-intelligence/engine");
const replicationEngine = require("/nora/civilization-core/layers/replication-engine/engine");
const evolutionEngine = require("/nora/civilization-core/layers/evolution-engine/engine");

function activate(label, payload) {
    const enriched = heart.applyRules(payload);
    const decision = heart.intelligentDecide(
        [
            { id: "SAFE_BOOT_" + label, priority: "HIGH", risk: 0.1, stability: 0.9 },
            { id: "FAST_BOOT_" + label, priority: "MEDIUM", risk: 0.4, stability: 0.6 }
        ],
        enriched
    );
    return { enriched, decision };
}

module.exports = {
    activateGen6() {
        heart.initialize();

        const metaRes = activate("Meta-Intelligence Layer", {
            scenario: "META_INTELLIGENCE_LAYER_ACTIVATION"
        });

        const replRes = activate("Civilization Replication Engine", {
            scenario: "CIVILIZATION_REPLICATION_ENGINE_ACTIVATION"
        });

        const evolRes = activate("Civilization Evolution Engine", {
            scenario: "CIVILIZATION_EVOLUTION_ENGINE_ACTIVATION"
        });

        return {
            status: "GEN6_PATHS_ACTIVATED",
            metaIntelligence: { child: metaIntelligence, ...metaRes },
            replicationEngine: { child: replicationEngine, ...replRes },
            evolutionEngine: { child: evolutionEngine, ...evolRes }
        };
    }
};
