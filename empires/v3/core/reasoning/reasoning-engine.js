/**
 * NoraCivilis v3 — Reasoning Engine
 * Analyzes system state and produces actionable insights
 */

class ReasoningEngine {
  analyze(state) {
    const analysis = [];

    // 1) فایل‌های خراب → نیاز به مدیریت خطا
    if (state.corruptedFiles.length > 0) {
      analysis.push({
        type: "handle_corrupted_files",
        files: state.corruptedFiles.map(f => f.file),
        reasons: state.corruptedFiles.map(f => f.reason)
      });
    }

    // 2) فایل‌های گم‌شده → نیاز به بازسازی
    if (state.missingFiles.length > 0) {
      analysis.push({
        type: "rebuild_missing_files",
        files: state.missingFiles
      });
    }

    // 3) فایل‌های بزرگ → نیاز به split
    if (state.largeFiles.length > 0) {
      analysis.push({
        type: "split_large_files",
        files: state.largeFiles
      });
    }

    // اگر هیچ کاری لازم نیست
    if (analysis.length === 0) {
      analysis.push({
        type: "idle",
        message: "No action required"
      });
    }

    return analysis;
  }
}

module.exports = new ReasoningEngine();
