module.exports = {
    name: "Language Empire",
    type: "CORE_LANGUAGE_EMPIRE",
    version: 1,

    languages: [],
    rules: [],

    registerLanguage(lang) {
        this.languages.push(lang);
        return lang;
    },

    registerRule(rule) {
        this.rules.push(rule);
        return rule;
    }
};
