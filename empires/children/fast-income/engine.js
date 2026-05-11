module.exports = {
    name: "Fast Income Empire",
    type: "FAST_INCOME_EMPIRE",
    version: 1,
    incomeStreams: [],
    registerStream(s) { this.incomeStreams.push(s); return s; }
};
