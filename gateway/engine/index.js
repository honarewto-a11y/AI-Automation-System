
module.exports = {
  selectCountry: (country) => ({ ok: true, country }),
  getWelcome: (country) => ({ welcome: "Welcome", country }),
  checkGate: (userId, action) => ({ allowed: false, reason: "register_required" }),
  register: (userId, country) => ({ registered: true, nc_id: "NC-TEST-001" }),
  login: (nc_code) => ({ login: true, nc_id: "NC-TEST-001" }),
  chat: (userId, message) => ({ reply: "Hello!", suggest_registration: true })
};
