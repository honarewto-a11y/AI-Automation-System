module.exports = {
    name: "Civilization Evolution Engine",
    type: "CIVILIZATION_EVOLUTION_ENGINE",
    version: 1,
    epochs: [],
    mutations: [],
    registerEpoch(epoch) {
        this.epochs.push(epoch);
        return epoch;
    },
    registerMutation(mut) {
        this.mutations.push(mut);
        return mut;
    }
};
