const bus = require("../eventbus/main");
const core = require("../core/main");

function start() {
    console.log("Intelligence V2 Started");

    bus.on("command", (cmd) => {
        core.logEvent("intelligence_command_v2", cmd);

        if (cmd.action === "build_v3") {
            console.log("Intelligence V2: Received build_v3 command");
            bus.emit("build_v3");
        }
    });
}

module.exports = {
    start
};
