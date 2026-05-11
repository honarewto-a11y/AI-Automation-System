// /nora-v1/utils/intentDetector.js

const keywords = {
    translation: ["ترجمه", "çeviri", "translate"],
    graphic_design: ["طراحی", "لوگو", "بنر", "banner", "post", "پست"],
    video_edit: ["ادیت", "ویرایش ویدیو", "reels", "shorts", "video edit"],
    store_build: ["فروشگاه", "shopier", "trendyol", "e-ticaret", "ecommerce"],
    copywriting: ["متن", "کپی رایتینگ", "caption", "متن تبلیغاتی"],
    telegram_bot: ["ربات", "بات", "telegram bot", "تلگرام"],
    seo: ["سئو", "seo", "تحلیل سایت", "بهینه سازی"],
    multilang_content: ["چندزبانه", "multilang", "multi language"],
    digital_marketing: ["دیجیتال مارکتینگ", "ads", "تبلیغات", "kampanya"],
    resume_builder: ["رزومه", "cv", "resume", "iş başvurusu"]
};

module.exports = {
    async detect(serviceType, input) {
        if (serviceType && keywords[serviceType]) {
            return serviceType;
        }

        const text = (input?.text || "").toString().toLowerCase();

        for (const [service, words] of Object.entries(keywords)) {
            if (words.some(w => text.includes(w.toLowerCase()))) {
                return service;
            }
        }

        return "translation"; // پیش‌فرض: ترجمه
    }
};
