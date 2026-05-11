module.exports = {
    stabilize(text) {
        if (!text) return null;

        let t = text;

        // حذف زبان‌های غیر فارسی
        t = t.replace(/[a-zA-Z]+/g, "");
        t = t.replace(/[\u4e00-\u9fff]+/g, ""); // حذف چینی
        t = t.replace(/[\u3040-\u30ff]+/g, ""); // حذف ژاپنی
        t = t.replace(/[\uac00-\ud7af]+/g, ""); // حذف کره‌ای

        // حذف کاراکترهای عجیب
        t = t.replace(/[^۰-۹آ-یءئۀًٌٍَُِّ\s\.\،\؟\!]/g, "");

        // حذف فاصله‌های اضافی
        t = t.replace(/\s+/g, " ").trim();

        return t;
    }
};
