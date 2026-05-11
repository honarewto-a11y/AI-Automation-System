/**
 * NoraCivilis v3 — Self‑Check Engine
 * Scans for large files, missing files, corrupted files, and structural issues
 */

const fs = require('fs');

class SelfCheckEngine {

  scan() {
    const state = {
      largeFiles: [],
      missingFiles: [],
      corruptedFiles: [],
      errors: [],
      incompleteStructures: []
    };

    // مسیرهایی که باید بررسی شوند
    const pathsToCheck = [
      "/nora-v3/huge-test-file.txt",
      "/nora-v3/core",
      "/nora-v3/modules",
      "/nora-v3/rules"
    ];

    for (const p of pathsToCheck) {
      try {
        if (!fs.existsSync(p)) {
          state.missingFiles.push(p);
          continue;
        }

        const stat = fs.statSync(p);

        // اگر فایل است → بررسی حجم
        if (stat.isFile()) {
          const size = stat.size;

          // اگر فایل بزرگ است → اضافه کن
          if (size > 5000) {
            state.largeFiles.push(p);
          }

          // بررسی خرابی احتمالی
          try {
            fs.readFileSync(p, 'utf8');
          } catch (err) {
            state.corruptedFiles.push(p);
          }
        }

        // اگر پوشه است → بررسی ساختار
        if (stat.isDirectory()) {
          const files = fs.readdirSync(p);
          if (files.length === 0) {
            state.incompleteStructures.push(p);
          }
        }

      } catch (err) {
        state.errors.push({
          path: p,
          message: err.message
        });
      }
    }

    return state;
  }
}

module.exports = new SelfCheckEngine();
