/**
 * NoraCivilis v3 — Action Engine
 * Executes decisions produced by the Decision Engine
 */

const ErrorEngine = require('/nora-v3/core/error/error-engine');
const SelfHealing = require('/nora-v3/core/selfhealing/selfhealing-engine');

class ActionEngine {

  async execute(decision) {
    try {

      // 1) اگر هیچ اکشنی لازم نیست
      if (!decision || decision.action === "none") {
        return { status: "idle", decision };
      }

      // 2) اگر فایل خراب باید هندل شود
      if (decision.action === "handle_corrupted_files") {

        // به جای throw → مستقیم به SelfHealing بده
        const healing = SelfHealing.heal(decision.files);

        return {
          status: "healed",
          healing,
          decision
        };
      }

      // 3) اکشن‌های آینده
      // if (decision.action === "something_else") { ... }

      // 4) اکشن ناشناخته
      return {
        status: "unknown_action",
        decision
      };

    } catch (error) {
      // هر خطا → ErrorEngine
      ErrorEngine.handle(error);
      return {
        status: "error",
        error
      };
    }
  }
}

module.exports = new ActionEngine();
