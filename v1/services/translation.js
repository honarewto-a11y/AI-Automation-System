// /nora-v1/services/translation.js

module.exports = async function executeTranslation(input) {
    const source = input.text || "";
    const from = input.sourceLang || "unknown";
    const to = input.targetLang || "tr";

    const output = `[[TRANSLATED ${from} -> ${to}]]\n${source}`;

    return {
        type: "translation",
        from,
        to,
        input: source,
        output
    };
};
