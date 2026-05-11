module.exports = {
  apps: [
    { name: "nora-v1-builder", script: "/nora/v1/builder/main.js", cwd: "/nora/v1/builder", watch: false, autorestart: true },
    { name: "nora-v1-core", script: "/nora/v1/core/main.js", cwd: "/nora/v1/core", watch: false, autorestart: true },
    { name: "nora-v1-intelligence", script: "/nora/v1/intelligence/main.js", cwd: "/nora/v1/intelligence", watch: false, autorestart: true }
  ]
}
