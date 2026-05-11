/**
 * NoraCivilis v1 — Payment Engine
 * Handles USDT TRC20 TXID submissions
 */

class PaymentEngine {
  constructor() {
    this.payments = [];
  }

  registerPayment(user, txid, amount) {
    const entry = {
      user,
      txid,
      amount,
      status: 'pending',
      timestamp: new Date().toISOString()
    };

    this.payments.push(entry);
    return entry;
  }

  getAllPayments() {
    return this.payments;
  }
}

module.exports = new PaymentEngine();
