module.exports = {
    name: "Economic Empire",
    type: "ECONOMIC_EMPIRE",
    version: 1,

    markets: [],
    policies: [],

    registerMarket(mkt) {
        this.markets.push(mkt);
        return mkt;
    },

    registerPolicy(pol) {
        this.policies.push(pol);
        return pol;
    }
};
