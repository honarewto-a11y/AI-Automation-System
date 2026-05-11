module.exports = function governanceEngine({ diagnostic, rootCause, healing, patch, reconstruction, evolution }) {
    // نسخهٔ پایه: تصمیم می‌گیرد چه چیزهایی خودکار اجرا شوند و چه چیزهایی فقط گزارش شوند
    const decisions = {
        allowActiveHealing: true,
        allowPatching: true,
        allowReconstruction: true,
        allowEvolutionChanges: false // فعلاً فقط پیشنهاد، نه تغییر خودکار کد
    };

    // اگر ناحیه ناشناخته است، محافظه‌کار باش
    if (rootCause.area === "unknown") {
        decisions.allowActiveHealing = false;
        decisions.allowPatching = false;
        decisions.allowReconstruction = false;
    }

    return decisions;
};
