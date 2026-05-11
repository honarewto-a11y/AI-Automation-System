module.exports = {
    name: "Memory Empire",
    type: "CORE_MEMORY_EMPIRE",
    version: 1,

    spaces: [],
    policies: [],

    registerSpace(space) {
        this.spaces.push(space);
        return space;
    },

    registerPolicy(policy) {
        this.policies.push(policy);
        return policy;
    }
};
