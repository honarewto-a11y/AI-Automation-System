#!/bin/bash

set -e

echo "🔧 Creating engine and versioning for NoraCivilis..."

# Ensure directories exist
mkdir -p /nora/nora-civilization-core/engine
mkdir -p /nora/nora-civilization-core/versioning

echo "📁 Writing engine/main.js ..."
cat > /nora/nora-civilization-core/engine/main.js << 'EON'
module.exports = {
    start: (context) => {
        console.log("🚀 NoraCivilis REAL engine started.");
        console.log("   Civilization:", context.identity.civilization);
        console.log("   Generation:", context.identity.generation);
        console.log("   Active layers:", context.layers.length);
        console.log("   Version:", context.versioning.current || "v0.0.1");

        if (Array.isArray(context.layers)) {
            context.layers.forEach(layer => {
                console.log("   → Initializing layer:", layer);
            });
        }

        console.log("🧭 Engine run loop placeholder (extend here for real behavior).");
        console.log("✅ NoraCivilis REAL engine finished initial core cycle.");
    }
};
EON

echo "📁 Writing versioning/meta.json ..."
cat > /nora/nora-civilization-core/versioning/meta.json << 'EOV'
{
    "current": "v1.0.0",
    "channel": "core",
    "history": [
        {
            "version": "v1.0.0",
            "label": "GEN6_CORE_BOOT",
            "status": "active",
            "notes": "First stable core boot of NoraCivilis with real engine and versioning."
        }
    ]
}
EOV

echo "✅ Engine and versioning created successfully."
