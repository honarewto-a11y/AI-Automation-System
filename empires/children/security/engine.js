module.exports = {
    name: "Security Empire",
    type: "CORE_SECURITY_EMPIRE",
    version: 1,

    rules: [],
    audits: [],

    registerRule(rule) {
        this.rules.push(rule);
        return rule;
    },

    registerAudit(audit) {
        this.audits.push(audit);
        return audit;
    }
};
