const inheritance = require("./language-inheritance");

class MotherEmpire {
    constructor() {
        this.name = "Mother Empire of NoraCivilis";
        this.language = null;
        this.children = {};
    }

    initialize(motherLanguageId) {
        inheritance.setMotherLanguage(motherLanguageId);
        this.language = inheritance.motherLanguage;
        console.log(`🌐 Mother Empire Initialized with language: ${this.language.code}`);
    }

    registerChildEmpire(name, languageIds = []) {
        inheritance.addChildEmpire(name, languageIds);
        this.children[name] = inheritance.childEmpires[name];
        console.log(`🏛️ Child Empire Added: ${name}`);
    }

    getEmpireLanguages(name) {
        return inheritance.getLanguagesForEmpire(name);
    }

    getMotherLanguage() {
        return this.language;
    }
}

module.exports = new MotherEmpire();
