/**
 * NoraCivilis v3 — Knowledge Engine
 * Stores structured knowledge and manages large-file splitting
 */

const fs = require('fs');
const path = require('path');

class KnowledgeEngine {
  constructor() {
    this.knowledgeBase = {
      rules: [],
      structures: [],
      files: [] // فقط مسیر فایل‌ها
    };

    this.maxFileSize = 100 * 1024; // 100 KB
  }

  // ذخیره قوانین تمدن
  addRule(rule) {
    this.knowledgeBase.rules.push(rule);
  }

  // ذخیره ساختارها
  addStructure(struct) {
    this.knowledgeBase.structures.push(struct);
  }

  // ثبت فایل
  registerFile(filePath) {
    if (!this.knowledgeBase.files.includes(filePath)) {
      this.knowledgeBase.files.push(filePath);
    }

    // بررسی اندازه
    const stats = fs.statSync(filePath);

    if (stats.size > this.maxFileSize) {
      this.splitLargeFile(filePath);
    }
  }

  // File Splitter
  splitLargeFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const parts = [];
    let index = 0;

    for (let i = 0; i < content.length; i += this.maxFileSize) {
      const chunk = content.slice(i, i + this.maxFileSize);
      const partName = `${filePath}.part${index}`;
      fs.writeFileSync(partName, chunk);
      parts.push(partName);
      index++;
    }

    const indexFile = `${filePath}.index.json`;
    fs.writeFileSync(indexFile, JSON.stringify(parts, null, 2));

    return parts;
  }

  // خروجی دانش
  get files() {
    return this.knowledgeBase.files;
  }

  getKnowledge() {
    return this.knowledgeBase;
  }
}

module.exports = new KnowledgeEngine();
