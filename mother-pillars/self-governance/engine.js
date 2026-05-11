module.exports = {
    name: "Civilization Self-Governance Layer",
    type: "CIVILIZATION_SELF_GOVERNANCE_LAYER",
    version: 1,
    rules: [],
    councils: [],
    registerRule(rule) {
        this.rules.push(rule);
        return rule;
    },
    registerCouncil(council) {
        this.councils.push(council);
        return council;
    }
};
