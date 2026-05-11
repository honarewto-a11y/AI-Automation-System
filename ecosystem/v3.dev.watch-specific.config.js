module.exports = {
  apps: [
    {
      name: "nora-v3-builder-dev-watch-specific",
      script: "/nora/v3/builder/main.js",
      cwd: "/nora/v3/builder",
      watch: ["/nora/v3/builder/main.js", "/nora/v3/builder/designer_v4.js"],
      ignore_watch: ["node_modules","logs"]
    },
    {
      name: "nora-v3-intelligence-dev-watch-specific",
      script: "/nora/v3/intelligence/main.js",
      cwd: "/nora/v3/intelligence",
      watch: ["/nora/v3/intelligence/main.js"],
      ignore_watch: ["node_modules","logs"]
    }
  ]
}
