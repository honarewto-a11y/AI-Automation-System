module.exports = {
    evaluate(state = {}) {
        const stability = state.stability ?? 0.5;
        const load = state.systemLoad ?? 0.5;
        const evolution = state.evolution ?? 0.5;

        let mode = "STABLE";

        if (stability < 0.3 || load > 0.8) mode = "ALERT";
        if (evolution > 0.7 && stability > 0.5) mode = "EVOLVING";
        if (evolution > 0.85 && stability > 0.7) mode = "EXPANDING";

        return {
            status: "BEHAVIOR_EVALUATED",
            input: state,
            mode
        };
    }
};
