const fs = require("fs");
const path = require("path");

function logEvent(event, data = {}) {
    const logPath = "/nora/v2/logs";
    if (!fs.existsSync(logPath)) {
        fs.mkdirSync(logPath, { recursive: true });
    }

    const entry = {
        event,
        data,
        time: new Date().toISOString()
    };

    fs.appendFileSync(
        path.join(logPath, "core.log"),
        JSON.stringify(entry) + "\n"
    );

    console.log("Core:", entry);
}

module.exports = {
    logEvent
};
