#!/usr/bin/env bash

LOG="/var/log/nora-auto-heal.log"
SERVICE="nora-telegram.service"

echo "[$(date)] AUTO-HEAL START" >> "$LOG"

# 1) گرفتن آخرین خطای Node از systemd
ERROR=$(journalctl -u $SERVICE -n 20 --no-pager | grep "MODULE_NOT_FOUND" | tail -1)

if [ -z "$ERROR" ]; then
    echo "[$(date)] No module error detected" >> "$LOG"
    exit 0
fi

echo "[$(date)] ERROR DETECTED: $ERROR" >> "$LOG"

# 2) استخراج نام فایل گم‌شده
BROKEN=$(echo "$ERROR" | sed 's/.*Cannot find module //;s/".*//;s/'\''//g')

echo "[$(date)] Missing module: $BROKEN" >> "$LOG"

# 3) اگر ماژول npm بود → نصب کن
if [[ "$BROKEN" != /* ]]; then
    echo "[$(date)] Installing npm module: $BROKEN" >> "$LOG"
    npm install "$BROKEN" >> "$LOG" 2>&1
    systemctl restart $SERVICE
    echo "[$(date)] SERVICE RESTARTED" >> "$LOG"
    exit 0
fi

# 4) اگر فایل JS بود → از بکاپ جایگزین کن
LIVE="$BROKEN"
BAK="/nora/backups/$(basename $BROKEN).stable"

if [ -f "$BAK" ]; then
    echo "[$(date)] Restoring file from backup: $BAK → $LIVE" >> "$LOG"
    cp "$BAK" "$LIVE"
    chmod 644 "$LIVE"
    systemctl restart $SERVICE
    echo "[$(date)] SERVICE RESTARTED" >> "$LOG"
else
    echo "[$(date)] No backup found for $LIVE" >> "$LOG"
fi

echo "[$(date)] AUTO-HEAL END" >> "$LOG"
