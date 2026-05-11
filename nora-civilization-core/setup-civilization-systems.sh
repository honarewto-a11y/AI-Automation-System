#!/bin/bash
set -e

echo "🔧 Creating behavior, long-term memory, and mother empire engines..."

BASE="/nora/nora-civilization-core/engine"
mkdir -p "$BASE"

echo "📁 Writing behavior engine ..."
cat > "$BASE/behavior.js" << 'EOB'
module.exports = {
    init: (context) => {
        console.log("🧠 Behavior Engine: initialized.");
        console.log("   Civilization:", context.identity.civilization);
        console.log("   Generation:", context.identity.generation);
    },
    runOnce: (context) => {
        console.log("🧠 Behavior Engine: running one behavior cycle...");
        console.log("   Rules dignityFirst:", context.rules.dignityFirst);
        console.log("   Layers available:", context.layers.length);
        console.log("   → Example decision: maintain stability and observe.");
    }
};
EOB

echo "📁 Writing long-term memory engine ..."
cat > "$BASE/memory-longterm.js" << 'EOM'
const memoryLog = [];

module.exports = {
    init: (context) => {
        console.log("🧱 Long-Term Memory Engine: initialized.");
        console.log("   Version context:", context.versioning.current || "v0.0.1");
    },
    recordEvent: (event) => {
        memoryLog.push({
            ...event,
            at: new Date().toISOString()
        });
        console.log("🧱 Long-Term Memory: recorded event:", event.type || "unknown");
    },
    getSnapshot: () => {
        return {
            count: memoryLog.length,
            last: memoryLog[memoryLog.length - 1] || null
        };
    }
};
EOM

echo "📁 Writing mother empire engine ..."
cat > "$BASE/mother-empire.js" << 'EOE'
module.exports = {
    init: (context) => {
        console.log("👑 Mother Empire Engine: initialized.");
        console.log("   Civilization:", context.identity.civilization);
        console.log("   Generation:", context.identity.generation);
        console.log("   → Mother Empire status: ONLINE (core-level).");
    },
    describeState: () => {
        console.log("👑 Mother Empire: core governance placeholder active.");
    }
};
EOE

echo "📁 Updating main engine to orchestrate all three ..."
cat > "$BASE/main.js" << 'EON'
const behavior = require("./behavior");
const ltm = require("./memory-longterm");
const empire = require("./mother-empire");

module.exports = {
    start: (context) => {
        console.log("🚀 NoraCivilis REAL engine orchestrator started.");
        console.log("   Civilization:", context.identity.civilization);
        console.log("   Generation:", context.identity.generation);
        console.log("   Active layers:", context.layers.length);
        console.log("   Version:", context.versioning.current || "v0.0.1");

        console.log("➡️  Initializing subsystems...");
        behavior.init(context);
        ltm.init(context);
        empire.init(context);

        console.log("➡️  Running one core civilization cycle...");
        behavior.runOnce(context);
        ltm.recordEvent({ type: "core_cycle", note: "Initial GEN6 core cycle completed." });
        empire.describeState();

        const snapshot = ltm.getSnapshot();
        console.log("📚 Long-Term Memory snapshot:", snapshot);

        console.log("✅ NoraCivilis GEN6 core civilization cycle completed.");
    }
};
EON

echo "✅ Behavior, long-term memory, and mother empire engines created and wired into main engine."
