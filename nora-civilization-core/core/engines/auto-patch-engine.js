const fs = require("fs");

module.exports = function autoPatchEngine(rootCause) {
    if (rootCause.area === "systemd") {
        const servicePath = "/etc/systemd/system/nora.service";
        const correctExec = "ExecStart=/usr/bin/node /nora/nora-civilization-core/telegram/bot.js";

        try {
            let content = fs.readFileSync(servicePath, "utf8");

            if (!content.includes(correctExec)) {
                content = content.replace(/ExecStart=.*/g, correctExec);
                fs.writeFileSync(servicePath, content, "utf8");
                return {
                    patched: true,
                    message: "فایل nora.service اصلاح شد.",
                    commands: [
                        "systemctl daemon-reload",
                        "systemctl restart nora"
                    ]
                };
            }

            return { patched: false, message: "نیازی به patch نبود." };
        } catch (e) {
            return { patched: false, message: "خطا در patch فایل systemd: " + e.message };
        }
    }

    return { patched: false, message: "patch لازم نبود." };
};
