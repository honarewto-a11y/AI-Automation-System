module.exports = {
  apps: [
    { name: "nora-v3-builder-dev", script: "/nora/v3/builder/main.js", cwd: "/nora/v3/builder", watch: true, ignore_watch: ["node_modules","logs"] },
    { name: "nora-v3-core-dev", script: "/nora/v3/core/main.js", cwd: "/nora/v3/core", watch: true, ignore_watch: ["node_modules","logs"] },
    { name: "nora-v3-intelligence-dev", script: "/nora/v3/intelligence/main.js", cwd: "/nora/v3/intelligence", watch: true, ignore_watch: ["node_modules","logs"] },
    { name: "nora-v3-eventbus-dev", script: "/nora/v3/eventbus/main.js", cwd: "/nora/v3/eventbus", watch: true, ignore_watch: ["node_modules","logs"] }
  ]
}
