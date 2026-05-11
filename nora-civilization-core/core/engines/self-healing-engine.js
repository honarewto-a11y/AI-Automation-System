module.exports = function selfHealingEngine(rootCause) {
    const { area, reason } = rootCause;

    if (area === "ollama" && reason === "MODEL_RESPONSE_EMPTY_OR_STREAMING") {
        return {
            action: "CHECK_LLM_BRIDGE",
            hint: "stream:false را در درخواست Ollama تنظیم کن.",
            command: null
        };
    }

    if (area === "ollama" && reason === "OLLAMA_UNREACHABLE") {
        return {
            action: "RESTART_OLLAMA",
            hint: "تمدن تلاش می‌کند سرویس ollama را ریستارت کند.",
            command: "systemctl restart ollama"
        };
    }

    if (area === "systemd") {
        return {
            action: "PATCH_SYSTEMD",
            hint: "تمدن تلاش می‌کند فایل nora.service را اصلاح کند.",
            command: null
        };
    }

    return {
        action: "ASK_HUMAN",
        hint: "تمدن نتوانست راه‌حل قطعی بدهد.",
        command: null
    };
};
