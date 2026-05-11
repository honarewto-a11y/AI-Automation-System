module.exports = function rootCauseEngine(diagnosticReport) {
    const msg = (diagnosticReport.message || "").toLowerCase();

    if (msg.includes("etelegram")) {
        return { area: "telegram", reason: "TELEGRAM_API_ERROR" };
    }

    if (msg.includes("connect") && msg.includes("11434")) {
        return { area: "ollama", reason: "OLLAMA_UNREACHABLE" };
    }

    if (msg.includes("systemd")) {
        return { area: "systemd", reason: "SERVICE_CONFIG_OR_CRASH" };
    }

    if (msg.includes("تمدن نتوانست پاسخی از مدل دریافت کند") ||
        msg.includes("model_response_empty")) {
        return { area: "ollama", reason: "MODEL_RESPONSE_EMPTY_OR_STREAMING" };
    }

    return { area: "unknown", reason: "UNKNOWN_CAUSE" };
};
