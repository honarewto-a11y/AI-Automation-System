// /nora-v1/utils/inputProcessor.js

const languageDetector = require('./languageDetector');

module.exports = {
    async process(serviceType, input) {
        const text = (input?.text || "").toString().trim();

        const base = {
            raw: input,
            text,
            files: input?.files || null
        };

        if (serviceType === "translation") {
            const detected = await languageDetector.detect(text);
            return {
                ...base,
                sourceLang: detected,
                targetLang: input?.targetLang || "tr"
            };
        }

        if (serviceType === "graphic_design") {
            return {
                ...base,
                style: input?.style || "minimal",
                size: input?.size || "1080x1080"
            };
        }

        if (serviceType === "video_edit") {
            return {
                ...base,
                format: input?.format || "reels",
                duration: input?.duration || "short"
            };
        }

        if (serviceType === "resume_builder") {
            return {
                ...base,
                name: input?.name || "",
                experience: input?.experience || [],
                skills: input?.skills || []
            };
        }

        return base;
    }
};
