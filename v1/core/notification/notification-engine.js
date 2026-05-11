/**
 * NoraCivilis v1 — Notification Engine
 * Mother Empire Notification System
 */

class NotificationEngine {
  constructor() {
    this.logs = [];
  }

  sendNotification(source, message) {
    const entry = {
      source,
      message,
      timestamp: new Date().toISOString()
    };

    this.logs.push(entry);
    return entry;
  }

  getAllNotifications() {
    return this.logs;
  }
}

module.exports = new NotificationEngine();
