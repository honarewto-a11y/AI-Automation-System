/**
 * NoraCivilis v3 — Log Engine
 * Writes official logs for all brain activities
 */

const fs = require('fs');
const path = require('path');

class LogEngine {
  constructor() {
    this.logDir = "/nora-v3/logs";

    // ساخت پوشه لاگ اگر وجود ندارد
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }

    this.logFile = path.join(this.logDir, "nora-v3.log");
  }

  write(type, data) {
    const entry = {
      timestamp: new Date().toISOString(),
      type,
      data
    };

    fs.appendFileSync(
      this.logFile,
      JSON.stringify(entry) + "\n"
    );
  }

  logCycle(cycle) {
    this.write("cycle", cycle);
  }

  logEvent(event) {
    this.write("event", event);
  }

  logError(error) {
    this.write("error", error);
  }

  logAction(action) {
    this.write("action", action);
  }
}

module.exports = new LogEngine();
