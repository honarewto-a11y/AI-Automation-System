module.exports = {
    name: "Identity Empire",
    type: "CORE_IDENTITY_EMPIRE",
    version: 1,

    identities: [],
    rules: [],

    registerIdentity(id) {
        this.identities.push(id);
        return id;
    },

    registerRule(rule) {
        this.rules.push(rule);
        return rule;
    }
};
