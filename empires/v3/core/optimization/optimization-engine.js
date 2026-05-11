/**
 * NoraCivilis v3 — Self-Optimization Engine
 * Learns from past cycles and improves future behavior
 */

class OptimizationEngine {

  optimize(memory) {
    const cycles = memory.cycles || [];
    if (cycles.length < 2) {
      return { status: "not_enough_data" };
    }

    const last = cycles[cycles.length - 1];
    const prev = cycles[cycles.length - 2];

    const improvements = [];

    // 1) اگر فایل خراب درمان شد → قانون جدید بساز
    if (last.decision?.action === "handle_corrupted_files") {
      improvements.push({
        type: "rule_suggestion",
        message: "Add automatic corruption-prevention rule for this file type",
        files: last.decision.files
      });
    }

    // 2) اگر چرخه طولانی بود → پیشنهاد بهینه‌سازی
    if (last.timestamp - prev.timestamp > 2000) {
      improvements.push({
        type: "performance",
        message: "Cycle took too long — consider optimizing SelfCheck"
      });
    }

    // 3) اگر خطا زیاد بود → پیشنهاد سخت‌گیری بیشتر
    if (memory.errors.length > 5) {
      improvements.push({
        type: "stability",
        message: "High error count — increase validation strictness"
      });
    }

    return {
      status: "optimized",
      improvements
    };
  }
}

module.exports = new OptimizationEngine();
