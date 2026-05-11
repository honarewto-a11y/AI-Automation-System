#!/bin/bash

echo "🔵 فعال‌سازی کامل استک تمدن NoraCivilis..."

rm -rf /nora/cache/* 2>/dev/null
rm -rf /root/.cache/node/* 2>/dev/null
rm -rf /root/.npm/_cacache/* 2>/dev/null

node -e "try{delete require.cache['/nora/civilization-language-engine/language-core.js']}catch(e){}"
node -e "try{delete require.cache['/nora/civilization-output-engine/output-composer.js']}catch(e){}"
node -e "try{delete require.cache['/nora/mother.js']}catch(e){}"

systemctl restart nora-telegram.service

echo "🟢 استک کامل تمدن فعال شد."
