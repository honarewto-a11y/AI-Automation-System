module.exports = {
    name: "Knowledge Empire",
    type: "KNOWLEDGE_EMPIRE",
    version: 1,
    knowledgeBase: [],
    registerKnowledge(k) { this.knowledgeBase.push(k); return k; }
};
