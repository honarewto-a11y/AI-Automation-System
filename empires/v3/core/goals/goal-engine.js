/**
 * NoraCivilis v3 — Goal Engine
 * Creates, prioritizes, and evaluates autonomous goals
 */

class GoalEngine {

  generate(memory) {
    const cycles = memory.cycles || [];
    const events = memory.events || [];

    const goals = [];

    const lastCycle = cycles[cycles.length - 1];
    const lastEvent = events[events.length - 1];

    // 1) اگر سیستم مدت زیادی idle بوده → هدف ایجاد فعالیت
    if (lastCycle && Date.now() - lastCycle.timestamp > 5000) {
      goals.push({
        type: "maintain_activity",
        priority: "medium",
        description: "System has been idle too long — generate activity goal"
      });
    }

    // 2) اگر فرگشت پیشنهاد داده → هدف تکامل
    if (lastEvent?.evolution?.suggestions?.length > 0) {
      goals.push({
        type: "evolution_followup",
        priority: "high",
        description: "Follow evolutionary suggestions and implement structural improvements"
      });
    }

    // 3) اگر گسترش انجام شده → هدف تثبیت
    if (lastEvent?.expansion?.expansions?.length > 0) {
      goals.push({
        type: "stabilize_expansion",
        priority: "high",
        description: "New modules created — stabilize and integrate them"
      });
    }

    // 4) اگر هیچ هدفی لازم نبود → هدف پایدارسازی
    if (goals.length === 0) {
      goals.push({
        type: "maintain_stability",
        priority: "low",
        description: "System stable — maintain equilibrium"
      });
    }

    return {
      status: "goals_generated",
      goals
    };
  }

  prioritize(goalSet) {
    if (!goalSet || !goalSet.goals) {
      return { status: "no_goals" };
    }

    const sorted = goalSet.goals.sort((a, b) => {
      const order = { high: 3, medium: 2, low: 1 };
      return order[b.priority] - order[a.priority];
    });

    return {
      status: "prioritized",
      goals: sorted
    };
  }

  evaluate(memory) {
    return {
      status: "evaluation_complete",
      message: "Goal evaluation placeholder — ready for future metrics"
    };
  }
}

module.exports = new GoalEngine();
