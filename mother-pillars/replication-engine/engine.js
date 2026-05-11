module.exports = {
    name: "Civilization Replication Engine",
    type: "CIVILIZATION_REPLICATION_ENGINE",
    version: 1,
    templates: [],
    replicas: [],
    registerTemplate(tpl) {
        this.templates.push(tpl);
        return tpl;
    },
    registerReplica(rep) {
        this.replicas.push(rep);
        return rep;
    }
};
