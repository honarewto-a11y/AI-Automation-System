/**
 * NoraCivilis v1 — Service Engine
 * Mother Empire Core Services:
 * Identity + Language + Notification + Payment + Delivery + Error + Governance
 */

const EmpireRegistry = require('./empire/empire-registry');
const NotificationEngine = require('./notification/notification-engine');
const PaymentEngine = require('./payment/payment-engine');
const DeliveryEngine = require('./delivery/delivery-engine');
const ErrorEngine = require('./error/error-engine');
const GovernanceEngine = require('./governance/governance-engine');

class ServiceEngine {
  constructor() {
    // Load Mother Empire Identity
    this.motherEmpire = EmpireRegistry.mother;

    // Load All Languages from Language Core
    this.languages = EmpireRegistry.languages;
  }

  // -------------------------------
  // Mother Empire Identity
  // -------------------------------
  getMotherEmpire() {
    return this.motherEmpire;
  }

  // -------------------------------
  // Mother Empire — Language Access
  // -------------------------------
  getMotherEmpireLanguages() {
    return this.languages;
  }

  // -------------------------------
  // Mother Empire — Notification System
  // -------------------------------
  sendMotherEmpireNotification(message) {
    return NotificationEngine.sendNotification('Mother Empire', message);
  }

  getMotherEmpireNotifications() {
    return NotificationEngine.getAllNotifications();
  }

  // -------------------------------
  // Mother Empire — Payment System
  // -------------------------------
  registerMotherEmpirePayment(user, txid, amount) {
    return PaymentEngine.registerPayment(user, txid, amount);
  }

  getMotherEmpirePayments() {
    return PaymentEngine.getAllPayments();
  }

  // -------------------------------
  // Mother Empire — Delivery System
  // -------------------------------
  activateMotherEmpireService(user, serviceName, paymentTxid) {
    return DeliveryEngine.activateService(user, serviceName, paymentTxid);
  }

  getMotherEmpireServices() {
    return DeliveryEngine.getAllServices();
  }

  // -------------------------------
  // Mother Empire — Error & Health System
  // -------------------------------
  logMotherEmpireError(message) {
    return ErrorEngine.logError('Mother Empire', message);
  }

  logMotherEmpireWarning(message) {
    return ErrorEngine.logWarning('Mother Empire', message);
  }

  getMotherEmpireErrors() {
    return ErrorEngine.getAllErrors();
  }

  getMotherEmpireWarnings() {
    return ErrorEngine.getAllWarnings();
  }

  getMotherEmpireHealth() {
    return ErrorEngine.getHealthStatus();
  }

  // -------------------------------
  // Mother Empire — Governance System
  // -------------------------------
  addMotherEmpireLaw(title, description) {
    return GovernanceEngine.addLaw(title, description);
  }

  removeMotherEmpireLaw(id) {
    return GovernanceEngine.removeLaw(id);
  }

  getMotherEmpireLaws() {
    return GovernanceEngine.getAllLaws();
  }

  issueMotherEmpireCommand(command) {
    return GovernanceEngine.issueCommand(command);
  }

  getMotherEmpireCommands() {
    return GovernanceEngine.getAllCommands();
  }

  getMotherEmpireGovernanceState() {
    return GovernanceEngine.getGovernanceState();
  }
}

module.exports = new ServiceEngine();
