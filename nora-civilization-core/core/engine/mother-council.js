module.exports = function motherCouncil(motherState, userIntent) {

    const score = {
        ethics: 0,
        identity: 0,
        freedom: 0,
        truth: 0,
        culture: 0
    };

    const intel = motherState.intelligence || {};

    if (intel["ethical-intelligence"]) score.ethics += 2;
    if (intel["identity-intelligence"]) score.identity += 2;
    if (intel["social-intelligence"]) score.culture += 1;
    if (intel["cultural-intelligence"]) score.culture += 2;
    if (intel["philosophical-intelligence"]) score.truth += 2;
    if (intel["mission-intelligence"]) score.freedom += 1;

    const total =
        score.ethics +
        score.identity +
        score.freedom +
        score.truth +
        score.culture || 1;

    const normalized = {
        ethics: score.ethics / total,
        identity: score.identity / total,
        freedom: score.freedom / total,
        truth: score.truth / total,
        culture: score.culture / total
    };

    return {
        userIntent,
        weights: normalized,
        comment:
            "این یک پیشنهاد تمدنی است، نه تصمیم نهایی. تصمیم نهایی با انسان است."
    };
};
