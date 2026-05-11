/**
 * NoraCivilis v1 — Delivery Engine
 * Handles service activation after payment
 */

class DeliveryEngine {
  constructor() {
    this.services = [];
  }

  activateService(user, serviceName, paymentTxid) {
    const entry = {
      user,
      serviceName,
      paymentTxid,
      status: 'active',
      activatedAt: new Date().toISOString()
    };

    this.services.push(entry);
    return entry;
  }

  getAllServices() {
    return this.services;
  }
}

module.exports = new DeliveryEngine();
