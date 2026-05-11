const fs = require('fs');
const path = require('path');

class LanguageCore {
  constructor() {
    const filePath = path.join(__dirname, '..', '..', 'data', 'languages', 'all-languages.json');
    const raw = fs.readFileSync(filePath, 'utf8');
    this.languages = JSON.parse(raw);
  }

  getAllLanguages() {
    return this.languages;
  }
}

module.exports = new LanguageCore();
