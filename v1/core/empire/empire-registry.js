/**
 * NoraCivilis v1 — Empire Registry
 * Mother Empire + Language Core Integration
 */

const fs = require('fs');
const path = require('path');
const LanguageCore = require('../language/language-core');

// -------------------------------
// Load Mother Empire Identity
// -------------------------------
function loadMotherEmpireIdentity() {
  const filePath = path.join(__dirname, '..', '..', 'mother-empire', 'identity.json');
  const raw = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(raw);
}

// -------------------------------
// Empire Registry Object
// -------------------------------
const EmpireRegistry = {
  mother: loadMotherEmpireIdentity(),
  languages: LanguageCore.getAllLanguages()
};

module.exports = EmpireRegistry;
