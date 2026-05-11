module.exports = {
    async run(serviceType, input) {
        const intentDetector = require('../utils/intentDetector');
        const inputProcessor = require('../utils/inputProcessor');
        const logger = require('../utils/logger');

        try {
            // 1) تشخیص نوع خدمت
            const detected = await intentDetector.detect(serviceType, input);

            // 2) پردازش ورودی
            const processed = await inputProcessor.process(detected, input);

            // 3) اجرای خدمت
            const executor = require(`../services/${detected}.js`);
            const output = await executor(processed);

            // 4) ثبت سفارش
            await logger.save({
                service: detected,
                input: processed,
                output,
                status: "completed",
                timestamp: Date.now()
            });

            return {
                success: true,
                service: detected,
                output
            };

        } catch (err) {
            return {
                success: false,
                error: err.message
            };
        }
    }
};
