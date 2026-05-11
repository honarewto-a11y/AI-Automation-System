module.exports = {
  apps: [
    ...require("./v1.dev.config").apps,
    ...require("./v2.dev.config").apps,
    ...require("./v3.dev.config").apps,
    ...require("./v4.dev.config").apps
  ]
}
