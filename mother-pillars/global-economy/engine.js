module.exports = {
    name: "Global Civilization Economy Engine",
    type: "GLOBAL_CIVILIZATION_ECONOMY_ENGINE",
    version: 1,
    markets: [],
    links: [],
    registerMarket(market) {
        this.markets.push(market);
        return market;
    },
    registerLink(link) {
        this.links.push(link);
        return link;
    }
};
