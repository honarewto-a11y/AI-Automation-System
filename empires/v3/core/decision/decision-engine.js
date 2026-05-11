/**
 * NoraCivilis v3 — Decision Engine
 * Turns analysis into concrete actions
 */

class DecisionEngine {
  /**
   * Main decision function
   * @param {Object|Array} analysis - single analysis object or array of analysis items
   * @returns {Object} decision
   */
  choose(analysis) {
    // اگر آرایه بود، فعلاً ساده‌ترین استراتژی: اولین آیتم مهم را انتخاب کن
    if (Array.isArray(analysis)) {
      if (analysis.length === 0) {
        return { action: "none", reason: "no_analysis" };
      }
      // فعلاً فقط اولین تحلیل را مبنا می‌گیریم
      return this._decideFromItem(analysis[0]);
    }

    // اگر یک آبجکت تکی بود
    if (analysis && typeof analysis === "object") {
      return this._decideFromItem(analysis);
    }

    // اگر هیچ چیز معناداری نبود
    return { action: "none", reason: "invalid_analysis" };
  }

  /**
   * Decide based on a single analysis item
   * @param {Object} item
   * @returns {Object} decision
   */
  _decideFromItem(item) {
    const type = item.type;

    // 1) فایل‌های خراب
    if (type === "handle_corrupted_files") {
      return {
        action: "handle_corrupted_files",
        files: item.files || [],
        reasons: item.reasons || [],
        priority: "high"
      };
    }

    // 2) حالت‌های دیگر آینده (placeholder)
    // if (type === "something_else") { ... }

    // 3) اگر تحلیل می‌گوید «هیچ کاری لازم نیست»
    if (type === "idle") {
      return {
        action: "none",
        reason: "idle_state"
      };
    }

    // 4) پیش‌فرض: نوع تحلیل ناشناخته است
    return {
      action: "none",
      reason: "no_valid_action",
      analysisType: type || "unknown"
    };
  }
}

module.exports = new DecisionEngine();
