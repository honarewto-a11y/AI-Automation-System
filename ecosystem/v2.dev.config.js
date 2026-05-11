module.exports = {
  apps: [
    { name: "nora-v2-builder-dev", script: "/nora/v2/builder/main.js", cwd: "/nora/v2/builder", watch: true, ignore_watch: ["node_modules","logs"] },
    { name: "nora-v2-core-dev", script: "/nora/v2/core/main.js", cwd: "/nora/v2/core", watch: true, ignore_watch: ["node_modules","logs"] },
    { name: "nora-v2-intelligence-dev", script: "/nora/v2/intelligence/main.js", cwd: "/nora/v2/intelligence", watch: true, ignore_watch: ["node_modules","logs"] }
  ]
}
