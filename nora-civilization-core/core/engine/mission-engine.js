module.exports = function missionEngine(event = {}) {
    const safePayload = event.payload || {};

    return {
        mission: "Expand human-centered intelligence",
        subgoals: [
            "Interpret user intent with maximum clarity",
            "Preserve human agency",
            "Increase knowledge and understanding",
            "Align responses with civilizational ethics"
        ],
        context: {
            eventType: event.type || "unknown",
            payloadSummary: JSON.stringify(safePayload).slice(0, 200)
        }
    };
};
