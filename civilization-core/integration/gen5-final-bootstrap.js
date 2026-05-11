const heart = require("/nora/civilization-heart/heart");
const mother1 = require("/nora/empires/mother/mother-empire");
const mother2 = require("/nora/empires/mother2/engine");

const intelligenceGen5 = require("/nora/civilization-core/layers/intelligence-gen5/engine");
const selfGovernance = require("/nora/civilization-core/layers/self-governance/engine");
const autonomy = require("/nora/civilization-core/layers/autonomy/engine");
const globalEconomy = require("/nora/civilization-core/layers/global-economy/engine");

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
    activateGen5() {
        heart.initialize();

        // Mother Empire دوم
        const mother2Res = activate("Second Mother Empire", {
            scenario: "SECOND_MOTHER_EMPIRE_ACTIVATION",
            generation: 5
        });

        // Intelligence Layer Gen5
        const intelRes = activate("Intelligence Layer Gen5", {
            scenario: "INTELLIGENCE_LAYER_GEN5_ACTIVATION",
            layers: intelligenceGen5.layers
        });

        // Self-Governance Layer
        const selfGovRes = activate("Civilization Self-Governance Layer", {
            scenario: "SELF_GOVERNANCE_LAYER_ACTIVATION"
        });

        // Autonomy Layer
        const autonomyRes = activate("Civilization Autonomy Layer", {
            scenario: "AUTONOMY_LAYER_ACTIVATION"
        });

        // Global Economy
        const globalEcoRes = activate("Global Civilization Economy Engine", {
            scenario: "GLOBAL_ECONOMY_ENGINE_ACTIVATION"
        });

        return {
            status: "GEN5_COMPLETED",
            mother1: { name: mother1.name || "Mother Empire v1" },
            mother2: { child: mother2, ...mother2Res },
            intelligenceGen5: { child: intelligenceGen5, ...intelRes },
            selfGovernance: { child: selfGovernance, ...selfGovRes },
            autonomy: { child: autonomy, ...autonomyRes },
            globalEconomy: { child: globalEconomy, ...globalEcoRes }
        };
    }
};
