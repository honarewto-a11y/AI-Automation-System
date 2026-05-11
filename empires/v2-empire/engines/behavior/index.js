module.exports = function createBehavior(eventBus, memory) {
  return {
    adapt(signal) {
      const result = {
        signal,
        mode: signal === "high-load" ? "defensive" : "normal",
        timestamp: Date.now()
      };
      eventBus.emit("behavior", "adapt", result);
      memory.push("empire_behavior_adapt", result);
      return result;
    }
  };
};