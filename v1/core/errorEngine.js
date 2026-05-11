module.exports = {
    async handle(error) {
        console.error("ERROR:", error);

        return {
            logged: true,
            message: error.message
        };
    }
};
