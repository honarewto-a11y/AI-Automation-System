/**
 * NoraCivilis v3 — Rebuild Engine
 * Rebuilds missing folders and basic structural files
 */

const fs = require('fs');
const path = require('path');

class RebuildEngine {

  rebuildMissing(missingPaths = []) {
    const operations = [];

    if (!Array.isArray(missingPaths) || missingPaths.length === 0) {
      return {
        status: "no_missing_paths",
        operations
      };
    }

    for (const p of missingPaths) {
      try {
        // اگر الان وجود دارد، رد شو
        if (fs.existsSync(p)) {
          operations.push({
            path: p,
            status: "already_exists"
          });
          continue;
        }

        const dirName  = path.extname(p) ? path.dirname(p) : p;
        const isFile   = !!path.extname(p);

        // ساخت پوشهٔ اصلی
        fs.mkdirSync(dirName, { recursive: true });

        if (isFile) {
          // اگر مسیر شبیه فایل است → یک فایل پایه بساز
          fs.writeFileSync(p, "// Auto‑recreated by RebuildEngine\n", 'utf8');
          operations.push({
            path: p,
            type: "file",
            status: "created"
          });
        } else {
          // اگر مسیر پوشه است → یک index پایه داخلش بساز
          const indexPath = path.join(p, 'index.json');
          fs.writeFileSync(indexPath, JSON.stringify({
            rebuilt: true,
            path: p,
            createdAt: Date.now()
          }, null, 2), 'utf8');

          operations.push({
            path: p,
            type: "directory",
            status: "created",
            index: indexPath
          });
        }

      } catch (err) {
        operations.push({
          path: p,
          status: "error",
          message: err.message
        });
      }
    }

    return {
      status: "rebuild_done",
      operations
    };
  }
}

module.exports = new RebuildEngine();
