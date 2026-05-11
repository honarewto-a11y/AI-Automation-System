/**
 * NoraCivilis v3 — Self-Evolution Engine
 * Generates new rules and structural changes based on long-term patterns
 */

class EvolutionEngine {

  evolve(memory) {
    const cycles = memory.cycles || [];
    const events = memory.events || [];
    const errors = memory.errors || [];

    if (cycles.length === 0) {
      return { status: "no_data" };
    }

    const suggestions = [];

    // 1) اگر چند بار پشت‌سرهم فایل خراب درمان شده → پیشنهاد قانون دائمی
    const corruptedHealEvents = events.filter(e =>
      e.event && e.event.status === "healed"
    );

    if (corruptedHealEvents.length >= 3) {
      suggestions.push({
        type: "permanent_rule",
        message: "Create a permanent corruption-prevention rule for frequently healed files",
        count: corruptedHealEvents.length
      });
    }

    // 2) اگر خطاهای تکراری از یک نوع خاص زیاد است → پیشنهاد تغییر ساختار
    const errorTypes = {};
    for (const err of errors) {
      const type = err.type || "unknown";
      errorTypes[type] = (errorTypes[type] || 0) + 1;
    }

    for (const [type, count] of Object.entries(errorTypes)) {
      if (count >= 3) {
        suggestions.push({
          type: "structural_change",
          message: `Consider structural change to reduce recurring error type: ${type}`,
          occurrences: count
        });
      }
    }

    // 3) اگر مدت‌هاست همه‌چیز idle است → پیشنهاد افزایش پیچیدگی
    const lastCycle = cycles[cycles.length - 1];
    const lastDecision = lastCycle.decision;

    if (lastDecision?.action === "none" && errors.length === 0) {
      suggestions.push({
        type: "complexity_increase",
        message: "System is stable and idle — safe to increase cognitive complexity or add new checks"
      });
    }

    return {
      status: "evolved",
      suggestions
    };
  }
}

module.exports = new EvolutionEngine();
