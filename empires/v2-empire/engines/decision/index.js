module.exports = function createDecision(eventBus, memory) {
  return {
    decide(label, options = []) {
      const result = {
        label,
        options,
        chosen: options[0] || null,
        timestamp: Date.now()
      };
      eventBus.emit("decision", "made", result);
      memory.push("empire_decision", result);
      return result;
    }
  };
};