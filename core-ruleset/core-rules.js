module.exports = {
    identityRules: require("/nora/civilization-core/identity.json"),
    heartSteps: require("/nora/civilization-core/heart-steps.json"),
    empireDisplayRules: require("/nora/civilization-core/empire-display.json"),
    coreRuleset: require("/nora/civilization-core/core-ruleset.json"),

    summary() {
        return {
            identityRulesLoaded: !!this.identityRules,
            heartStepsLoaded: !!this.heartSteps,
            empireDisplayRulesLoaded: !!this.empireDisplayRules,
            coreRulesetLoaded: !!this.coreRuleset
        };
    }
};
