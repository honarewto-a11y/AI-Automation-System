let pending = {};

module.exports = {
    register(chatId, product) {
        pending[chatId] = product;
    },
    getPending() {
        return pending;
    },
    clear(chatId) {
        delete pending[chatId];
    }
};
