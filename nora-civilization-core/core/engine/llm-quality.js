function isAcceptable(answer) {
    if (!answer) return false;
    const text = answer.toString().trim();
    if (text.length < 10) return false;

    const hasPersian = /[آ-ی]/.test(text);
    if (!hasPersian) return false;

    const latinMatches = text.match(/[A-Za-z]/g) || [];
    const latinCount = latinMatches.length;
    const total = text.length;
    if (latinCount > total * 0.3) return false;

    if (/\[답변|\bUser:|```/.test(text)) return false;

    return true;
}

module.exports = { isAcceptable };
