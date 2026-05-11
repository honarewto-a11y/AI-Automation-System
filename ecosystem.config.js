module.exports = {
  apps: [
    // ============================
    // V3 BUILDER
    // ============================
    {
      name: "nora-v3-builder",
      script: "/nora/v3/builder/main.js",
      cwd: "/nora/v3/builder",
      watch: true,
      watch_delay: 500,
      ignore_watch: ["node_modules", "logs"],
      autorestart: true,
      max_restarts: 50,
      restart_delay: 200,
      force: true,
      exp_backoff_restart_delay: 100,
      env: { NODE_ENV: "production" }
    },

    // ============================
    // V3 API
    // ============================
    {
      name: "nora-v3-api",
      script: "/nora/v3/api/main.js",
      cwd: "/nora/v3/api",
      watch: true,
      watch_delay: 500,
      ignore_watch: ["node_modules", "logs"],
      autorestart: true,
      restart_delay: 200,
      force: true,
      env: { NODE_ENV: "production" }
    },

    // ============================
    // V3 EVENTBUS
    // ============================
    {
      name: "nora-v3-eventbus",
      script: "/nora/v3/eventbus/main.js",
      cwd: "/nora/v3/eventbus",
      watch: true,
      watch_delay: 500,
      ignore_watch: ["node_modules", "logs"],
      autorestart: true,
      restart_delay: 200,
      force: true,
      env: { NODE_ENV: "production" }
    },

    // ============================
    // V4 INTELLIGENCE
    // ============================
    {
      name: "nora-v4-intelligence",
      script: "/nora/v4/intelligence/main.js",
      cwd: "/nora/v4/intelligence",
      watch: true,
      watch_delay: 500,
      ignore_watch: ["node_modules", "logs"],
      autorestart: true,
      restart_delay: 200,
      force: true,
      env: { NODE_ENV: "production" }
    }
  ]
}
