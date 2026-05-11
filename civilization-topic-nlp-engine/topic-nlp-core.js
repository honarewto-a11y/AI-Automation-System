/**
 * Topic NLP Engine — NoraCivilis
 * تشخیص موضوع اصلی از جمله‌های طبیعی فارسی مثل:
 * «دایناسور یعنی چی؟»، «هوش مصنوعی چیه؟»، «تمدن چیست؟»
 */

function normalize(text) {
    return text
        .replace(/[؟?]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

function stripQuestionPatterns(text) {
    const patterns = [
        'یعنی چی', 'یعنی چی', 'یعنی چه',
        'چیه', 'چی هست', 'چی است', 'چیست',
        'چی میشه', 'چی می‌شود', 'چی می شود',
        'چی', 'چه هست', 'چه است', 'چه می‌باشد', 'چه می باشد'
    ];
    let t = text;
    patterns.forEach(p => {
        t = t.replace(p, '');
    });
    return t.trim();
}

function extractTopic(inputText) {
    if (!inputText) return '';

    let t = normalize(inputText);
    t = stripQuestionPatterns(t);

    // اگر هنوز خالی شد، همان ورودی را برگردان
    if (!t) return normalize(inputText);

    return t;
}

module.exports = { extractTopic };
