const fs = require('fs');
const path = require('path');

module.exports = function createBuilder(eventBus, memory) {
  return {
    preview(payload) {
      const result = {
        ok: true,
        plannedFiles: ["identity.json", "engine.js"],
        timestamp: Date.now()
      };
      eventBus.emit("builder", "preview", result);
      memory.push("empire_builder_preview", result);
      return result;
    },
    execute(payload) {
      const version = payload.targetVersion || "v3";
      const dir = `/nora-${version}`;
      if (!fs.existsSync(dir)) fs.mkdirSync(dir);
      fs.writeFileSync(
        path.join(dir, "identity.json"),
        JSON.stringify({ version, builtBy: "empire" }, null, 2)
      );
      const result = {
        ok: true,
        message: "empire-build-complete",
        version,
        timestamp: Date.now()
      };
      eventBus.emit("builder", "execute", result);
      memory.push("empire_builder_execute", result);
      return result;
    }
  };
};