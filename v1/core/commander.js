module.exports = {
    async command(action, payload) {
        const serviceEngine = require('./serviceEngine');
        const paymentEngine = require('./paymentEngine');
        const notificationEngine = require('./notificationEngine');

        if (action === "run_service") {
            return await serviceEngine.run(payload.service, payload.input);
        }

        if (action === "verify_payment") {
            return await paymentEngine.verify(payload);
        }

        if (action === "notify") {
            return await notificationEngine.send(payload.type, payload.data);
        }

        return { success: false, error: "Unknown command" };
    }
};
