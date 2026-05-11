module.exports = {
    run(steps = []) {
        const trace = [];
        let context = {};

        for (let i = 0; i < steps.length; i++) {
            const step = steps[i];

            const result = step(context);

            const entry = {
                step: i + 1,
                input: context,
                output: result,
                timestamp: Date.now()
            };

            trace.push(entry);

            context = { ...context, ...result };
        }

        return {
            status: "MULTISTEP_THINKING_OK",
            steps: trace.length,
            trace
        };
    }
};
