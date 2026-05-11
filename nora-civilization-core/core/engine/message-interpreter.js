module.exports = function interpret(message) {
    if (!message) return "ورودی خالی است.";
    return `پاسخ تمدنی به: ${message}`;
};
