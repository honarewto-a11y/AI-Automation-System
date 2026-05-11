module.exports = function createMemory(eventBus) {
  const history = [];
  return {
    push(event, data) {
      history.push({ event, data, timestamp: Date.now() });
      eventBus.emit("memory", "push", { event, data });
    },
    list() {
      return history;
    }
  };
};