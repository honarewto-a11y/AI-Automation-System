const heart = require("/nora/civilization-heart/heart");
const mother = require("/nora/empires/mother/mother-empire");

const market = require("/nora/empires/children/market/engine");
const knowledge = require("/nora/empires/children/knowledge/engine");
const technology = require("/nora/empires/children/technology/engine");
const fastIncome = require("/nora/empires/children/fast-income/engine");
const techExpansion = require("/nora/empires/children/tech-expansion/engine");
const knowledgeExpansion = require("/nora/empires/children/knowledge-expansion/engine");
const globalMarket = require("/nora/empires/children/global-market/engine");

function activate(label, payload) {
    const enriched = heart.applyRules(payload);
    const decision = heart.intelligentDecide(
        [
            { id: "SAFE_BOOT_" + label, priority: "HIGH", risk: 0.1, stability: 0.9 },
            { id: "FAST_BOOT_" + label, priority: "MEDIUM", risk: 0.4, stability: 0.6 }
        ],
        enriched
    );
    mother.registerChild(label);
    return { enriched, decision };
}

module.exports = {
    activateAll() {
        heart.initialize();

        return {
            status: "SEVEN_EMPIRES_ACTIVATED",
            market: { child: market, ...activate("Market Empire", { scenario: "MARKET_EMPIRE_ACTIVATION" }) },
            knowledge: { child: knowledge, ...activate("Knowledge Empire", { scenario: "KNOWLEDGE_EMPIRE_ACTIVATION" }) },
            technology: { child: technology, ...activate("Technology Empire", { scenario: "TECHNOLOGY_EMPIRE_ACTIVATION" }) },
            fastIncome: { child: fastIncome, ...activate("Fast Income Empire", { scenario: "FAST_INCOME_EMPIRE_ACTIVATION" }) },
            techExpansion: { child: techExpansion, ...activate("Tech Expansion Empire", { scenario: "TECH_EXPANSION_EMPIRE_ACTIVATION" }) },
            knowledgeExpansion: { child: knowledgeExpansion, ...activate("Knowledge Expansion Empire", { scenario: "KNOWLEDGE_EXPANSION_EMPIRE_ACTIVATION" }) },
            globalMarket: { child: globalMarket, ...activate("Global Market Empire", { scenario: "GLOBAL_MARKET_EMPIRE_ACTIVATION" }) }
        };
    }
};
