// /nora-v1/utils/languageDetector.js

module.exports = {
    async detect(text) {
        const t = (text || "").toString();

        if (/[ığüşöçİĞÜŞÖÇ]/.test(t)) return "tr";
        if (/[اآبپتثجچحخدذرزسشصضطظعغفقکگلمنوهی]/.test(t)) return "fa";
        if (/[a-zA-Z]/.test(t)) return "en";

        return "unknown";
    }
};
