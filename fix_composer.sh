#!/bin/bash

echo "🔵 اصلاح Composer برای خروجی تمدنی واقعی..."

cat > /nora/civilization-output-engine/output-composer.js << 'EOM'
/**
 * NoraCivilis Output Composer (FULL CIVILIZATION MODE)
 * خروجی نهایی تمدنی — بدون هیچ کانتکست یا دادهٔ داخلی
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

🔹 لایهٔ آینده:
${frame.future}

🔹 شخصیت فعال:
${persona}
`.trim();
}

module.exports = { compose };
EOM

echo "🔵 ری‌استارت سرویس تلگرام..."
systemctl restart nora-telegram.service

echo "🟢 Composer اصلاح شد. خروجی تمدنی اکنون تمیز و نهایی است."
