module.exports = async function civilizationGateway(serviceId, inputs) {
    const layers = [
        "feedback",
        "evolution",
        "analysis",
        "decision",
        "action",
        "civilizational"
    ];

    const output = {};

    for (const layer of layers) {
        try {
            const engine = require(`./layers/${layer}-engine.js`);
            const result = await engine.run(serviceId, inputs, output);

            output[layer] = {
                success: true,
                result
            };
        } catch (err) {
            output[layer] = {
                success: false,
                error: err.message
            };
        }
    }

    return output;
};
