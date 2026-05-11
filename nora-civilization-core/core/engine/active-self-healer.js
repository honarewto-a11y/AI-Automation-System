const { exec } = require("child_process");

module.exports = function activeSelfHealer(healing) {
    if (!healing || !healing.command) return;

    exec(healing.command, (err, stdout, stderr) => {
        if (err) {
            console.error("self-healing failed:", err.message);
            return;
        }
        console.log("self-healing executed:", healing.command);
        if (stdout) console.log("stdout:", stdout.trim());
        if (stderr) console.log("stderr:", stderr.trim());
    });
};
