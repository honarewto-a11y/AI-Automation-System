const fs = require("fs");
const path = require("path");
const bus = require("../eventbus/main");
const core = require("../core/main");

function start() {
    console.log("Builder V2 Started");

    bus.on("build_v3", () => {
        console.log("Builder V2: Starting V3 build...");
        core.logEvent("builder_v3_start");

        const v3Path = "/nora/v3";

        if (!fs.existsSync(v3Path)) {
            fs.mkdirSync(v3Path, { recursive: true });
        }

        fs.writeFileSync(
            path.join(v3Path, "info.txt"),
            "NoraCivilis V3 created at " + new Date().toISOString()
        );

        console.log("Builder V2: V3 build completed");
        core.logEvent("builder_v3_completed");
    });
}

module.exports = {
    start
};
