const heart = require("/nora/civilization-heart/heart");
const mother = require("/nora/empires/mother/mother-empire");
const identity = require("/nora/empires/children/identity/engine");

module.exports = {
    activate() {
        const enriched = heart.applyRules({
            scenario: "IDENTITY_EMPIRE_ACTIVATION",
            empire: "Identity",
            goal: "CORE_IDENTITY_BOOTSTRAP"
        });

        const decision = heart.intelligentDecide(
            [
                { id: "SAFE_ID_BOOT", priority: "HIGH", risk: 0.05, stability: 0.95 },
                { id: "FAST_ID_BOOT", priority: "MEDIUM", risk: 0.3, stability: 0.6 }
            ],
            enriched
        );

        mother.registerChild("Identity Empire");

        return {
            status: "IDENTITY_EMPIRE_ACTIVATED",
            enriched,
            decision,
            child: identity
        };
    }
};
