// ===============================
// NoraCivilis v1 — Main Server
// ===============================

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Core Engines
const serviceEngine = require('./core/service-engine');

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ===============================
// Root Test Route
// ===============================
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    system: 'NoraCivilis v1',
    message: 'Server is running'
  });
});

// ===============================
// Mother Empire — Identity Route
// ===============================
app.get('/mother-empire/identity', (req, res) => {
  const identity = serviceEngine.getMotherEmpire();
  res.json({
    status: 'ok',
    source: 'v1',
    motherEmpire: identity
  });
});

// ===============================
// Mother Empire — Languages Route
// ===============================
app.get('/mother-empire/languages/all', (req, res) => {
  const languages = serviceEngine.getMotherEmpireLanguages();
  res.json({
    status: 'ok',
    count: languages.length,
    languages: languages
  });
});

// ===============================
// Mother Empire — Send Notification
// ===============================
app.post('/mother-empire/notify', (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.json({
      status: 'error',
      message: 'Notification message is required'
    });
  }

  const result = serviceEngine.sendMotherEmpireNotification(message);

  res.json({
    status: 'ok',
    notification: result
  });
});

// ===============================
// Mother Empire — Get Notifications
// ===============================
app.get('/mother-empire/notifications', (req, res) => {
  const logs = serviceEngine.getMotherEmpireNotifications();

  res.json({
    status: 'ok',
    count: logs.length,
    notifications: logs
  });
});

// ===============================
// Mother Empire — Register Payment
// ===============================
app.post('/mother-empire/payment/register', (req, res) => {
  const { user, txid, amount } = req.body;

  if (!user || !txid || !amount) {
    return res.json({
      status: 'error',
      message: 'user, txid and amount are required'
    });
  }

  const result = serviceEngine.registerMotherEmpirePayment(user, txid, amount);

  res.json({
    status: 'ok',
    payment: result
  });
});

// ===============================
// Mother Empire — Get Payments
// ===============================
app.get('/mother-empire/payments', (req, res) => {
  const payments = serviceEngine.getMotherEmpirePayments();

  res.json({
    status: 'ok',
    count: payments.length,
    payments: payments
  });
});

// ===============================
// Mother Empire — Activate Service
// ===============================
app.post('/mother-empire/service/activate', (req, res) => {
  const { user, serviceName, paymentTxid } = req.body;

  if (!user || !serviceName || !paymentTxid) {
    return res.json({
      status: 'error',
      message: 'user, serviceName and paymentTxid are required'
    });
  }

  const result = serviceEngine.activateMotherEmpireService(
    user,
    serviceName,
    paymentTxid
  );

  res.json({
    status: 'ok',
    service: result
  });
});

// ===============================
// Mother Empire — Get Services
// ===============================
app.get('/mother-empire/services', (req, res) => {
  const services = serviceEngine.getMotherEmpireServices();

  res.json({
    status: 'ok',
    count: services.length,
    services: services
  });
});

// ===============================
// Mother Empire — Log Error
// ===============================
app.post('/mother-empire/error', (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.json({
      status: 'error',
      message: 'Error message is required'
    });
  }

  const result = serviceEngine.logMotherEmpireError(message);

  res.json({
    status: 'ok',
    error: result
  });
});

// ===============================
// Mother Empire — Log Warning
// ===============================
app.post('/mother-empire/warning', (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.json({
      status: 'error',
      message: 'Warning message is required'
    });
  }

  const result = serviceEngine.logMotherEmpireWarning(message);

  res.json({
    status: 'ok',
    warning: result
  });
});

// ===============================
// Mother Empire — Get Errors
// ===============================
app.get('/mother-empire/errors', (req, res) => {
  const errors = serviceEngine.getMotherEmpireErrors();

  res.json({
    status: 'ok',
    count: errors.length,
    errors: errors
  });
});

// ===============================
// Mother Empire — Get Warnings
// ===============================
app.get('/mother-empire/warnings', (req, res) => {
  const warnings = serviceEngine.getMotherEmpireWarnings();

  res.json({
    status: 'ok',
    count: warnings.length,
    warnings: warnings
  });
});

// ===============================
// Mother Empire — Health Status
// ===============================
app.get('/mother-empire/health', (req, res) => {
  const health = serviceEngine.getMotherEmpireHealth();

  res.json({
    status: 'ok',
    health: health
  });
});

// ===============================
// Mother Empire — Add Law
// ===============================
app.post('/mother-empire/law/add', (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.json({
      status: 'error',
      message: 'title and description are required'
    });
  }

  const result = serviceEngine.addMotherEmpireLaw(title, description);

  res.json({
    status: 'ok',
    law: result
  });
});

// ===============================
// Mother Empire — Remove Law
// ===============================
app.post('/mother-empire/law/remove', (req, res) => {
  const { id } = req.body;

  const result = serviceEngine.removeMotherEmpireLaw(id);

  if (!result) {
    return res.json({
      status: 'error',
      message: 'Law not found'
    });
  }

  res.json({
    status: 'ok',
    removed: result
  });
});

// ===============================
// Mother Empire — Get Laws
// ===============================
app.get('/mother-empire/laws', (req, res) => {
  const laws = serviceEngine.getMotherEmpireLaws();

  res.json({
    status: 'ok',
    count: laws.length,
    laws: laws
  });
});

// ===============================
// Mother Empire — Issue Command
// ===============================
app.post('/mother-empire/command', (req, res) => {
  const { command } = req.body;

  if (!command) {
    return res.json({
      status: 'error',
      message: 'command is required'
    });
  }

  const result = serviceEngine.issueMotherEmpireCommand(command);

  res.json({
    status: 'ok',
    command: result
  });
});

// ===============================
// Mother Empire — Get Commands
// ===============================
app.get('/mother-empire/commands', (req, res) => {
  const commands = serviceEngine.getMotherEmpireCommands();

  res.json({
    status: 'ok',
    count: commands.length,
    commands: commands
  });
});

// ===============================
// Mother Empire — Governance State
// ===============================
app.get('/mother-empire/governance', (req, res) => {
  const state = serviceEngine.getMotherEmpireGovernanceState();

  res.json({
    status: 'ok',
    governance: state
  });
});

// ===============================
// Start Server
// ===============================
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`NoraCivilis v1 running on port ${PORT}`);
});

module.exports = app;
