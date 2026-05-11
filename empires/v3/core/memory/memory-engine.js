/**
 * NoraCivilis v3 — Memory Engine
 * Stores persistent internal memory for the Mother Empire Brain
 */

class MemoryEngine {
  constructor() {
    this.cycles = [];       // ذخیره چرخه‌های مغز
    this.events = [];       // رویدادهای مهم
    this.errors = [];       // خطاها
    this.decisions = [];    // تصمیم‌های گرفته‌شده
    this.stateHistory = []; // وضعیت‌های سیستم
  }

  storeCycle(data) {
    this.cycles.push({
      timestamp: Date.now(),
      ...data
    });
  }

  storeEvent(event) {
    this.events.push({
      timestamp: Date.now(),
      event
    });
  }

  storeError(error) {
    this.errors.push({
      timestamp: Date.now(),
      error
    });
  }

  storeDecision(decision) {
    this.decisions.push({
      timestamp: Date.now(),
      decision
    });
  }

  storeState(state) {
    this.stateHistory.push({
      timestamp: Date.now(),
      state
    });
  }

  getMemory() {
    return {
      cycles: this.cycles,
      events: this.events,
      errors: this.errors,
      decisions: this.decisions,
      stateHistory: this.stateHistory
    };
  }
}

module.exports = new MemoryEngine();
