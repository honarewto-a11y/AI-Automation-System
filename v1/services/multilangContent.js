// /nora-v1/services/multilangContent.js

module.exports = async function executeMultilangContent(input) {
    const text = input.text || "";
    const languages = input.languages || ["tr", "en", "fa"];

    const outputs = {};
    languages.forEach(lang => {
        outputs[lang] = `[[${lang.toUpperCase()} VERSION]]\n${text}`;
    });

    return {
        type: "multilang_content",
        base: text,
        languages,
        outputs
    };
};
