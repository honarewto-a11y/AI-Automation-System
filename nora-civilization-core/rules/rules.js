module.exports = {
    coreRules: [
        "civilization.identity.mustRemainStable",
        "civilization.language.mustFollowInheritanceModel",
        "civilization.empires.mustFollowMotherEmpireStructure",
        "civilization.memory.mustBeConsistent",
        "civilization.security.mustBeActive"
    ]

    ,
    initialize() {
        console.log("⚙ ماژول rules/rules.js initialize شد (خودکار)");
    }
};
module.exports = { rules: [] }
