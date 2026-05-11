// /nora-v1/services/copywriting.js

module.exports = async function executeCopywriting(input) {
    const text = input.text || "";
    const tone = input.tone || "neutral";

    const output = `[[COPY (${tone})]]\n${text}`;

    return {
        type: "copywriting",
        tone,
        brief: text,
        output
    };
};

