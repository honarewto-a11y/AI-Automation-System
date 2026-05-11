module.exports = {
    name: "Market Empire",
    type: "MARKET_EMPIRE",
    version: 1,
    markets: [],
    registerMarket(m) { this.markets.push(m); return m; }
};
