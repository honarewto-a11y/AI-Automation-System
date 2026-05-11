module.exports = {
    name: "Bionluk Empire",
    type: "SERVICE_EMPIRE",
    version: 1,

    services: [],
    modules: [],

    registerService(svc) {
        this.services.push(svc);
        return svc;
    },

    registerModule(mod) {
        this.modules.push(mod);
        return mod;
    }
};
