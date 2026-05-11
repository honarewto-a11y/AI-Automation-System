module.exports = {
    name: "Payment Empire",
    type: "PAYMENT_EMPIRE",
    version: 1,

    gateways: [],
    rules: [],

    registerGateway(gw) {
        this.gateways.push(gw);
        return gw;
    },

    registerRule(rule) {
        this.rules.push(rule);
        return rule;
    }
};
