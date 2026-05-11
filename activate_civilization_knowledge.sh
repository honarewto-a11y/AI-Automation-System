#!/bin/bash

echo "🔵 فعال‌سازی دانش تمدن NoraCivilis..."

rm -rf /nora/cache/* 2>/dev/null
rm -rf /root/.cache/node/* 2>/dev/null
rm -rf /root/.npm/_cacache/* 2>/dev/null

node -e "try{delete require.cache['/nora/civilization-knowledge-engine/knowledge-core.js']}catch(e){}"
node -e "try{delete require.cache['/nora/civilization-knowledge-engine/deep-knowledge.js']}catch(e){}"
node -e "try{delete require.cache['/nora/civilization-knowledge-engine/topic-profile.js']}catch(e){}"

systemctl restart nora-telegram.service

echo "🟢 دانش تمدن فعال شد."
