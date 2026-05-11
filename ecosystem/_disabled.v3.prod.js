module.exports = {
  apps: [
    { name: "nora-v3-builder", script: "/nora/v3/builder/main.js", cwd: "/nora/v3/builder", watch: false, autorestart: true },
    { name: "nora-v3-core", script: "/nora/v3/core/main.js", cwd: "/nora/v3/core", watch: false, autorestart: true },
    { name: "nora-v3-intelligence", script: "/nora/v3/intelligence/main.js", cwd: "/nora/v3/intelligence", watch: false, autorestart: true },
    { name: "nora-v3-eventbus", script: "/nora/v3/eventbus/main.js", cwd: "/nora/v3/eventbus", watch: false, autorestart: true }
  ]
}
