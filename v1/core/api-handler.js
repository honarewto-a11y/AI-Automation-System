// /nora-v1/api/index.js

const commander = require('../core/commander');
const notificationEngine = require('../core/notificationEngine');
const deliveryEngine = require('../core/deliveryEngine');
const errorEngine = require('../core/errorEngine');

module.exports = {
    /**
     * ورودی اصلی تمدن
     * body = {
     *   service: "translation" | ...,
     *   input: {...},
     *   user: { id, contact }
     * }
     */
    async handle(body) {
        try {
            const serviceType = body.service || null;
            const input = body.input || {};
            const user = body.user || { id: "anonymous" };

            // 1) اجرای سرویس
            const result = await commander.command("run_service", {
                service: serviceType,
                input
            });

            if (!result.success) {
                await errorEngine.handle(new Error(result.error || "Service failed"));
                await notificationEngine.send("service_failed", {
                    user,
                    service: serviceType,
                    error: result.error
                });

                return {
                    success: false,
                    error: result.error || "Service execution failed"
                };
            }

            // 2) اعلان موفقیت
            await notificationEngine.send("service_completed", {
                user,
                service: result.service,
                output: result.output
            });

            // 3) تحویل خروجی
            const delivery = await deliveryEngine.deliver(result.output, user);

            return {
                success: true,
                service: result.service,
                output: result.output,
                delivery
            };

        } catch (err) {
            await errorEngine.handle(err);
            return {
                success: false,
                error: err.message || "Internal error"
            };
        }
    }
};
