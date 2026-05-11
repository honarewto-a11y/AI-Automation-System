/**
 * NoraCivilis v3 — Structural Self-Healing Engine
 * Splits large files into smaller parts and restructures them into folders with an index
 */

const fs = require('fs');
const path = require('path');

class StructuralHealingEngine {

  splitLargeFiles(largeFiles = []) {
    const operations = [];

    // اگر چیزی برای کار نیست
    if (!Array.isArray(largeFiles) || largeFiles.length === 0) {
      return {
        status: "no_large_files",
        operations
      };
    }

    for (const filePath of largeFiles) {
      try {
        if (typeof filePath !== "string") {
          operations.push({
            file: filePath,
            status: "invalid_path"
          });
          continue;
        }

        // خواندن محتوا
        const content = fs.readFileSync(filePath, 'utf8');

        // اگر محتوا خیلی کوچک است، نیازی به split نیست
        if (content.length < 5000) {
          operations.push({
            file: filePath,
            status: "too_small_to_split",
            size: content.length
          });
          continue;
        }

        // ساخت پوشهٔ جدید بر اساس نام فایل
        const dirName = filePath.replace(/\.[^/.]+$/, '') + '_parts';
        fs.mkdirSync(dirName, { recursive: true });

        // تقسیم محتوا به بخش‌ها
        const chunkSize = 4000; // کاراکتر
        const parts = [];
        for (let i = 0; i < content.length; i += chunkSize) {
          parts.push(content.slice(i, i + chunkSize));
        }

        // نوشتن بخش‌ها در فایل‌های جدا
        const partFiles = [];
        parts.forEach((part, index) => {
          const partPath = path.join(dirName, `part_${index + 1}.txt`);
          fs.writeFileSync(partPath, part, 'utf8');
          partFiles.push(partPath);
        });

        // ساخت index
        const indexPath = path.join(dirName, 'index.json');
        fs.writeFileSync(indexPath, JSON.stringify({
          originalFile: filePath,
          parts: partFiles,
          createdAt: Date.now()
        }, null, 2), 'utf8');

        // می‌توانیم فایل اصلی را نگه داریم یا حذف کنیم؛ فعلاً نگه می‌داریم
        operations.push({
          file: filePath,
          status: "split",
          parts: partFiles,
          index: indexPath
        });

      } catch (err) {
        operations.push({
          file: filePath,
          status: "error",
          message: err.message
        });
      }
    }

    return {
      status: "structural_healing_done",
      operations
    };
  }
}

module.exports = new StructuralHealingEngine();
