module.exports = {
  apps: [
    ...require("./v1.prod.config").apps,
    ...require("./v2.prod.config").apps,
    ...require("./v3.prod.config").apps,
    ...require("./v4.prod.config").apps
  ]
}
