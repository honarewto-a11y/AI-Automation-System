module.exports = function routeMega(msg) {
    return {
        type: "mega",
        message: msg.text || "",
        user: msg.from,
        chat: msg.chat
    };
};
