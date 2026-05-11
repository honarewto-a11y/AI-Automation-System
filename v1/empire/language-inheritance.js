const bridge = require("../bridge/language-bridge");

class LanguageInheritance {
    constructor() {
        this.motherLanguage = null;
        this.childEmpires = {};
        this.modules = {};
    }

    setMotherLanguage(id) {
        const lang = bridge.getById(id);
        if (!lang) throw new Error("❌ Invalid mother language ID");
        this.motherLanguage = lang;
        console.log("👑 Mother Empire Language Set:", lang.code);
    }

    addChildEmpire(empireName, languageIds = []) {
        const langs = languageIds.map(id => bridge.getById(id)).filter(Boolean);
        this.childEmpires[empireName] = langs;
        console.log(`🏛️ Child Empire Registered: ${empireName}`);
    }

    addModule(moduleName, languageIds = []) {
        const langs = languageIds.map(id => bridge.getById(id)).filter(Boolean);
        this.modules[moduleName] = langs;
        console.log(`📦 Module Registered: ${moduleName}`);
    }

    getLanguagesForEmpire(empireName) {
        return {
            mother: this.motherLanguage,
            children: this.childEmpires[empireName] || []
        };
    }

    getLanguagesForModule(moduleName) {
        return {
            mother: this.motherLanguage,
            module: this.modules[moduleName] || []
        };
    }
}

module.exports = new LanguageInheritance();
