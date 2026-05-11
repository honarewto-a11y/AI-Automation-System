/**
 * NoraCivilis v3 — Self-Autonomy Engine
 * Allows Nora to decide when to run cycles, when to scan, and when to evolve
 */

class AutonomyEngine {

  decide(memory) {
    const cycles = memory.cycles || [];
    const events = memory.events || [];
    const errors = memory.errors || [];

    const lastCycle = cycles[cycles.length - 1];
    const lastEvent = events[events.length - 1];

    const decisions = [];

    // 1) اگر مدت زیادی idle بوده → خودش چرخه جدید اجرا کند
    if (lastCycle && Date.now() - lastCycle.timestamp > 5000) {
      decisions.push({
        type: "auto_cycle",
        message: "System has been idle too long — triggering autonomous cycle"
      });
    }

    // 2) اگر خطا زیاد باشد → خودش اسکن عمیق انجام دهد
    if (errors.length >= 3) {
      decisions.push({
        type: "deep_scan",
        message: "High error count — triggering deep self-check"
      });
    }

    // 3) اگر فرگشت پیشنهاد ساختار جدید داده → خودش اجرا کند
    if (lastEvent?.evolution?.suggestions?.length > 0) {
      decisions.push({
        type: "auto_expand",
        message: "Evolution suggests structural change — triggering expansion"
      });
    }

    // 4) اگر هیچ تصمیمی لازم نبود → خودمختاری خاموش
    if (decisions.length === 0) {
      return {
        status: "idle",
        decisions: []
      };
    }

    return {
      status: "autonomous",
      decisions
    };
  }
}

module.exports = new AutonomyEngine();
