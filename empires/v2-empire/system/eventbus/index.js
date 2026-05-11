module.exports = function createEventBus() {
  const events = [];
  return {
    emit(layer, event, data) {
      events.push({ layer, event, data, timestamp: Date.now() });
    },
    list() {
      return events;
    },
    clear() {
      events.length = 0;
    }
  };
};