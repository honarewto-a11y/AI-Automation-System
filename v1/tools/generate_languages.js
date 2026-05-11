const fs = require('fs');
const path = require('path');

const INPUT_FILE = path.join(__dirname, '../data/iso-639-3.tsv');
const OUTPUT_ROOT = path.join(__dirname, '../civilization/language/core/languages');

const PER_FILE = 100;
const FILES_PER_GROUP = 10;

const raw = fs.readFileSync(INPUT_FILE, 'utf8');
const lines = raw.split('\n').filter(l => l.trim().length > 0);

const codes = lines.map(line => {
  const parts = line.split('\t');
  return parts[0].trim();
});

const languages = codes.slice(0, 7000);

if (!fs.existsSync(OUTPUT_ROOT)) {
  fs.mkdirSync(OUTPUT_ROOT, { recursive: true });
}

languages.forEach((code, index) => {
  const globalIndex = index;
  const groupIndex = Math.floor(globalIndex / (PER_FILE * FILES_PER_GROUP)) + 1;
  const fileIndexInGroup = Math.floor((globalIndex % (PER_FILE * FILES_PER_GROUP)) / PER_FILE) + 1;

  const groupName = `group_${String(groupIndex).padStart(2, '0')}`;
  const fileNumber = (groupIndex - 1) * FILES_PER_GROUP + fileIndexInGroup;
  const fileName = `languages_${String(fileNumber).padStart(3, '0')}.json`;

  const groupDir = path.join(OUTPUT_ROOT, groupName);
  if (!fs.existsSync(groupDir)) {
    fs.mkdirSync(groupDir, { recursive: true });
  }

  const filePath = path.join(groupDir, fileName);

  let content = { languages: [] };
  if (fs.existsSync(filePath)) {
    try {
      content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (e) {
      content = { languages: [] };
    }
  }

  content.languages.push(code);

  fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
});

console.log('✅ 7000 languages distributed into groups and files.');
