module.exports = {
    name: "Civilization Autonomy Layer",
    type: "CIVILIZATION_AUTONOMY_LAYER",
    version: 1,
    recoveryPlans: [],
    expansionPlans: [],
    registerRecovery(plan) {
        this.recoveryPlans.push(plan);
        return plan;
    },
    registerExpansion(plan) {
        this.expansionPlans.push(plan);
        return plan;
    }
};
