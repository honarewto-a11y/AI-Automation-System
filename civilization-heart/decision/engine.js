module.exports = {
    evaluate(options = [], context = {}) {
        const scored = options.map(opt => {
            const priority = (opt.priority || "MEDIUM").toUpperCase();
            const base =
                priority === "HIGH" ? 3 :
                priority === "MEDIUM" ? 2 : 1;

            const risk = typeof opt.risk === "number" ? opt.risk : 0.5;       // 0..1
            const stability = typeof opt.stability === "number" ? opt.stability : 0.5; // 0..1

            const score = base + (stability * 2) - (risk * 2);

            return {
                ...opt,
                basePriorityScore: base,
                risk,
                stability,
                finalScore: score
            };
        }).sort((a, b) => b.finalScore - a.finalScore);

        return {
            status: "DECISION_EVALUATED",
            context,
            ranked: scored,
            best: scored[0] || null
        };
    }
};
