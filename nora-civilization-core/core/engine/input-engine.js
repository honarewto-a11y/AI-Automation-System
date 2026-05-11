module.exports = function normalizeInput(raw) {
    if (!raw) return "";
    let text = raw.toString().trim();
    return text;
};
