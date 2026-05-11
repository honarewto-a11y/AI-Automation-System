const core = require("../core/main");

function send(event, data = {}) {
    core.logEvent("notification_v2", { event, data });
    console.log("Notification V2:", event, data);
}

module.exports = {
    send
};
