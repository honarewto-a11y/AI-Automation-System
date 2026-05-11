function format(raw, context = {}) {
    if (!raw) return null;
    let text = raw.toString().trim();

    // حذف فاصله‌های اضافی در ابتدا/انتها
    text = text.replace(/\s+$/g, "").replace(/^\s+/g, "");

    return text;
}

module.exports = { format };
