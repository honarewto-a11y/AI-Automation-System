module.exports = {
    name: "Second Mother Empire",
    type: "MOTHER_EMPIRE_V2",
    version: 1,
    civilizations: [],
    registerCivilization(civ) {
        this.civilizations.push(civ);
        return civ;
    }
};
