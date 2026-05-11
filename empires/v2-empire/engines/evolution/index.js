module.exports = function createEvolution(eventBus, memory) {
  return {
    plan(currentVersion, targetVersion) {
      const result = {
        ok: true,
        currentVersion,
        targetVersion,
        steps: ["validate", "backup", "migrate", "activate"],
        timestamp: Date.now()
      };
      eventBus.emit("evolution", "plan", result);
      memory.push("empire_evolution_plan", result);
      return result;
    }
  };
};