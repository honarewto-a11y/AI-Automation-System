module.exports = {
    async send(type, data) {
        console.log("NOTIFICATION:", type, data);

        return {
            success: true,
            delivered: true
        };
    }
};
