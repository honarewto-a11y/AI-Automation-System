module.exports = {
  apps: [
    { name: "nora-v1-builder-dev", script: "/nora/v1/builder/main.js", cwd: "/nora/v1/builder", watch: true, ignore_watch: ["node_modules","logs"] },
    { name: "nora-v1-core-dev", script: "/nora/v1/core/main.js", cwd: "/nora/v1/core", watch: true, ignore_watch: ["node_modules","logs"] },
    { name: "nora-v1-intelligence-dev", script: "/nora/v1/intelligence/main.js", cwd: "/nora/v1/intelligence", watch: true, ignore_watch: ["node_modules","logs"] }
  ]
}
