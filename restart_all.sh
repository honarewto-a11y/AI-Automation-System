#!/bin/bash

echo ">>> Starting Nora V4 Services..."

# Intelligence Layer
pm2 start /nora/v4/intelligence/main.js --name nora-v4-intelligence

# Engine (اگر فایل server یا worker داری اینجا اضافه کن)
# pm2 start /nora/v4/engine/server.js --name nora-v4-engine

echo ">>> All Nora V4 services started."
