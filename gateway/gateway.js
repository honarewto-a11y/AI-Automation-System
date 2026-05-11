#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// ساخت پوشه‌ها
const dirs = [
  '/nora/gateway',
  '/nora/gateway/api',
  '/nora/gateway/data',
  '/nora/gateway/engine'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// فایل‌های داده
fs.writeFileSync('/nora/gateway/data/languages.json', '{}');
fs.writeFileSync('/nora/gateway/data/countries.json', '{}');

// APIها
const apis = {
  'selectCountry.js': `
module.exports = async function(req, res, civilization) {
  const { country } = req.body;
  const data = civilization.gatewayEngine.selectCountry(country);
  res.json(data);
};`,

  'welcome.js': `
module.exports = async function(req, res, civilization) {
  const { country } = req.query;
  const data = civilization.gatewayEngine.getWelcome(country);
  res.json(data);
};`,

  'gate.js': `
module.exports = async function(req, res, civilization) {
  const { userId, action } = req.body;
  const data = civilization.gatewayEngine.checkGate(userId, action);
  res.json(data);
};`,

  'register.js': `
module.exports = async function(req, res, civilization) {
  const { userId, country } = req.body;
  const data = civilization.gatewayEngine.register(userId, country);
  res.json(data);
};`,

  'login.js': `
module.exports = async function(req, res, civilization) {
  const { nc_code } = req.body;
  const data = civilization.gatewayEngine.login(nc_code);
  res.json(data);
};`,

  'wallet.js': `
module.exports = async function(req, res, civilization) {
  const { userId } = req.query;
  const data = civilization.economy.getWallet(userId);
  res.json(data);
};`,

  'payment.js': `
module.exports = async function(req, res, civilization) {
  const { userId, method, amount, txid } = req.body;
  const data = civilization.economy.processPayment(userId, method, amount, txid);
  res.json(data);
};`,

  'chat.js': `
module.exports = async function(req, res, civilization) {
  const { userId, message } = req.body;
  const data = civilization.gatewayEngine.chat(userId, message);
  res.json(data);
};`
};

// نوشتن APIها
Object.entries(apis).forEach(([file, content]) => {
  fs.writeFileSync(`/nora/gateway/api/${file}`, content);
});

// موتور دروازه
const engine = `
module.exports = {
  selectCountry: (country) => ({ ok: true, country }),
  getWelcome: (country) => ({ welcome: "Welcome", country }),
  checkGate: (userId, action) => ({ allowed: false, reason: "register_required" }),
  register: (userId, country) => ({ registered: true, nc_id: "NC-TEST-001" }),
  login: (nc_code) => ({ login: true, nc_id: "NC-TEST-001" }),
  chat: (userId, message) => ({ reply: "Hello!", suggest_registration: true })
};
`;

fs.writeFileSync('/nora/gateway/engine/index.js', engine);

// پیام نهایی
console.log("Gateway Engine نصب شد. لطفاً server.js را آپدیت کن و pm2 restart nora بزن.");
