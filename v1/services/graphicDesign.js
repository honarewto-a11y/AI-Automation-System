// /nora-v1/services/graphicDesign.js

module.exports = async function executeGraphicDesign(input) {
    const text = input.text || "";
    const style = input.style || "minimal";
    const size = input.size || "1080x1080";

    const mockUrl = "https://example.com/design/" + Date.now();

    return {
        type: "graphic_design",
        style,
        size,
        brief: text,
        file: mockUrl
    };
};
