function detectType(text = "") {
    const t = text.toString().trim();

    if (!t) return "smalltalk";

    const emotionalPatterns = /(دلم|حس می‌کنم|احساس|ناراحتم|خستم|تنها|عصبانی|غمگین)/;
    const sciencePatterns = /(ریاضی|فیزیک|شیمی|پزشکی|درمان|علت علمی|چرا اتفاق می‌افتد|چگونه کار می‌کند)/;
    const philosophyPatterns = /(فلسفه|معنا|هستی|وجود|آگاهی|روح|مرگ|زندگی|خدا|جهان‌بینی)/;
    const historyPatterns = /(تاریخ|جنگ|امپراتوری|تمدن|قرن|دوره)/;

    if (emotionalPatterns.test(t)) return "emotional";
    if (philosophyPatterns.test(t)) return "philosophy";
    if (sciencePatterns.test(t)) return "science";
    if (historyPatterns.test(t)) return "civilization";
    if (/چرا|چگونه|تحلیل|بررسی/.test(t)) return "analytic";

    if (/سلام|خوبی|چطوری|هی/.test(t) && t.length < 40) return "smalltalk";

    return "generic";
}

function selectPersona(inputText = "", frame = {}) {
    const kind = detectType(inputText);

    // هسته انسانی همیشه ۷۰٪
    let human = 0.7;
    let scholar = 0.2;
    let civ = 0.1;

    switch (kind) {
        case "emotional":
            human = 1.0; scholar = 0.0; civ = 0.0;
            break;
        case "science":
            human = 0.5; scholar = 0.5; civ = 0.0;
            break;
        case "philosophy":
            human = 0.4; scholar = 0.0; civ = 0.6;
            break;
        case "civilization":
            human = 0.5; scholar = 0.1; civ = 0.4;
            break;
        case "analytic":
            human = 0.6; scholar = 0.4; civ = 0.0;
            break;
        case "smalltalk":
            human = 0.9; scholar = 0.05; civ = 0.05;
            break;
        case "generic":
        default:
            human = 0.7; scholar = 0.2; civ = 0.1;
            break;
    }

    return {
        kind,
        weights: {
            human,
            scholar,
            civilization: civ
        }
    };
}

module.exports = { selectPersona };
