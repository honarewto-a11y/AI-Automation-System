/**
 * NoraCivilis Output Composer (FULL FRAME)
 */

function compose({ frame, persona }) {
    return `
${frame.intro}

🔹 تحلیل علمی:
${frame.knowledge}

🔹 تحلیل عمیق تمدنی:
${frame.deep}

🔹 لایهٔ فلسفی:
${frame.philosophical}

🔹 لایهٔ فرهنگی:
${frame.cultural}

🔹 لایهٔ ساختاری:
${frame.structural}

🔹 لایهٔ آینده:
${frame.future}

🔹 شخصیت فعال:
${persona || "default-persona"}
`.trim();
}

module.exports = { compose };
