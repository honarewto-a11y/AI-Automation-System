module.exports = {
    async deliver(output, user) {
        return {
            success: true,
            delivered_to: user,
            output
        };
    }
};
