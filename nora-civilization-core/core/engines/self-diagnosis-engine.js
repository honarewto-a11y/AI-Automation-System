module.exports = function selfDiagnosis({ error, context = {} }) {
    const report = {
        time: new Date().toISOString(),
        type: error?.code || error?.name || "UNKNOWN_ERROR",
        message: error?.message || String(error),
        stack: error?.stack || null,
        context
    };
    return report;
};
