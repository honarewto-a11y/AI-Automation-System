module.exports = {
    runtime: require("./runtime"),
    memory: require("./memory"),
    security: require("./security"),
    data: require("./data"),
    connector: require("./connector"),
    monitoring: require("./monitoring"),
    versioning: require("./versioning")

    ,
    initialize() {
        console.log("⚙ ماژول layers/layers.js initialize شد (خودکار)");
    }
};
