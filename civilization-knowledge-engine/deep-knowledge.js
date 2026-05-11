/**
 * NoraCivilis Deep Knowledge
 * تحلیل تمدنی عمیق برای موضوعات
 */

const deepPatterns = {
    physics: topic =>
        `از منظر تمدنی، «${topic}» فقط یک پدیدهٔ فیزیکی نیست؛ بلکه ابزاری است که انسان با آن جهان را اندازه‌گیری، مدل‌سازی و بازطراحی می‌کند.`,
    biology: topic =>
        `در سطح تمدنی، «${topic}» نشان می‌دهد که چگونه حیات، فرهنگ و تکنولوژی در هم تنیده می‌شوند و انسان جایگاه خود را در زیست‌کره بازتعریف می‌کند.`,
    abstract: topic =>
        `«${topic}» در لایهٔ عمیق، نه‌فقط یک احساس یا مفهوم، بلکه سازوکاری است که ساختارهای قدرت، هویت و معنا را در تمدن‌ها شکل می‌دهد.`,
    technology: topic =>
        `«${topic}» در سطح تمدنی، شتاب‌دهنده‌ای برای تغییرات ساختاری است؛ از اقتصاد و سیاست تا هویت فردی و جمعی.`,
    civilization: topic =>
        `خودِ «${topic}» بازتابی از تلاش انسان برای ساختن نظم‌های پایدار در دل هرج‌ومرج طبیعت و تاریخ است.`,
    history: topic =>
        `«${topic}» در تاریخ، نه‌فقط رویدادی خطی، بلکه گره‌ای در شبکهٔ بزرگ‌تر نیروها، ایده‌ها و ساختارهای تمدنی است.`
};

function detectCategory(type) {
    switch (type) {
        case "science":
        case "physics":
            return "physics";
        case "biology":
            return "biology";
        case "abstract":
            return "abstract";
        case "technology":
            return "technology";
        case "history":
            return "history";
        case "civilization":
        default:
            return "civilization";
    }
}

function generate(topic, type) {
    const cat = detectCategory(type);
    const fn = deepPatterns[cat];
    if (fn) return fn(topic);

    return `در لایهٔ عمیق‌تر، «${topic}» بخشی از شبکهٔ بزرگ معنا، قدرت و ساختارهای تمدنی است که در طول تاریخ دگرگون می‌شوند.`;
}

module.exports = { generate };
