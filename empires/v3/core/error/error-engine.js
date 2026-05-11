/**
 * NoraCivilis v3 — Error Engine
 * Categorizes, tracks, and manages system errors
 */

const Memory = require('../memory/memory-engine');
const Log = require('../log/log-engine');

class ErrorEngine {
  constructor() {
    this.errorTypes = {
      FILE_MISSING: "file_missing",
      FILE_CORRUPT: "file_corrupt",
      ENGINE_FAILURE: "engine_failure",
      INVALID_STATE: "invalid_state",
      UNKNOWN: "unknown"
    };
  }

  classify(error) {
    if (!error) return this.errorTypes.UNKNOWN;

    if (error.message?.includes("ENOENT")) {
      return this.errorTypes.FILE_MISSING;
    }

    if (error.message?.includes("corrupt")) {
      return this.errorTypes.FILE_CORRUPT;
    }

    if (error.message?.includes("engine")) {
      return this.errorTypes.ENGINE_FAILURE;
    }

    return this.errorTypes.UNKNOWN;
  }

  handle(error) {
    const type = this.classify(error);

    const entry = {
      timestamp: Date.now(),
      type,
      message: error.message || "Unknown error",
      stack: error.stack || null
    };

    // ذخیره در حافظه
    Memory.storeError(entry);

    // ثبت در لاگ رسمی تمدن
    Log.logError(entry);

    return entry;
  }
}

module.exports = new ErrorEngine();
