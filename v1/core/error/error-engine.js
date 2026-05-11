/**
 * NoraCivilis v1 — Error Engine
 * Handles system errors, warnings and health status
 */

class ErrorEngine {
  constructor() {
    this.errors = [];
    this.warnings = [];
  }

  logError(source, message) {
    const entry = {
      type: 'error',
      source,
      message,
      timestamp: new Date().toISOString()
    };

    this.errors.push(entry);
    return entry;
  }

  logWarning(source, message) {
    const entry = {
      type: 'warning',
      source,
      message,
      timestamp: new Date().toISOString()
    };

    this.warnings.push(entry);
    return entry;
  }

  getAllErrors() {
    return this.errors;
  }

  getAllWarnings() {
    return this.warnings;
  }

  getHealthStatus() {
    return {
      status: 'ok',
      errors: this.errors.length,
      warnings: this.warnings.length,
      timestamp: new Date().toISOString()
    };
  }
}

module.exports = new ErrorEngine();
