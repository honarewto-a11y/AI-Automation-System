module.exports = {
    name: "Mother Empire of NoraCivilis",
    version: 1,
    type: "MOTHER_EMPIRE",

    modules: [],
    services: [],
    children: [],

    registerModule(mod) {
        this.modules.push(mod);
        return mod;
    },

    registerService(svc) {
        this.services.push(svc);
        return svc;
    },

    registerChild(child) {
        this.children.push(child);
        return child;
    }
};
