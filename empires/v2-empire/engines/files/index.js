const fs = require('fs');
const path = require('path');

module.exports = function createFileEngine(eventBus, memory) {
  return {
    split(sourcePath, maxSize) {
      if (!fs.existsSync(sourcePath)) {
        return { ok: false, error: "not-found" };
      }
      const size = fs.statSync(sourcePath).size;
      if (size <= maxSize) {
        return { ok: true, skipped: true };
      }
      const dir = path.dirname(sourcePath);
      const base = path.basename(sourcePath);
      const outDir = path.join(dir, base + "_chunks");
      if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
      const buffer = fs.readFileSync(sourcePath);
      let index = 0;
      for (let i = 0; i < size; i += maxSize) {
        const chunk = buffer.slice(i, i + maxSize);
        fs.writeFileSync(path.join(outDir, `chunk_${index}.part`), chunk);
        index++;
      }
      const result = { ok: true, chunks: index };
      eventBus.emit("files", "split", result);
      memory.push("empire_file_split", result);
      return result;
    }
  };
};