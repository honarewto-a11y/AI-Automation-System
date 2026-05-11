module.exports = {
  apps: [
    { name: "nora-v2-builder", script: "/nora/v2/builder/main.js", cwd: "/nora/v2/builder", watch: false, autorestart: true },
    { name: "nora-v2-core", script: "/nora/v2/core/main.js", cwd: "/nora/v2/core", watch: false, autorestart: true },
    { name: "nora-v2-intelligence", script: "/nora/v2/intelligence/main.js", cwd: "/nora/v2/intelligence", watch: false, autorestart: true }
  ]
}
