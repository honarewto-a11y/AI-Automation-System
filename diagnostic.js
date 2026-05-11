// NoraCivilis – Generation‑7 Self‑Healing Diagnostic
// --------------------------------------------------

const fs = require("fs");
const path = require("path");

// مسیرهای واقعی که روی سرور تو وجود دارند
const REAL_PATHS = {
    "language-core.js": "/nora/v1/core/language/language-core.js",
    "knowledge-core.js": "/nora/civilization-knowledge-engine/knowledge-core.js",
    "deep-knowledge.js": "/nora/civilization-knowledge-engine/deep-knowledge.js",
    "output-composer.js": "/nora/civilization-output-engine/output-composer.js",
    "reasoning-core.js": "/nora/civilization-reasoning-engine/reasoning-core.js",
    "identity-core.js": "/nora/civilization-identity-engine/identity-core.js",
    "mission-core.js": "/nora/civilization-mission-engine/mission-core.js",
    "strategic-core.js": "/nora/civilization-strategic-engine/strategic-core.js",
    "event-core.js": "/nora/civilization-event-engine/event-core.js",
    "tactical-core.js": "/nora/civilization-tactical-engine/tactical-core.js",
    "ethical-core.js": "/nora/civilization-ethical-engine/ethical-core.js",
    "system-identity-core.js": "/nora/civilization-system-identity-engine/system-identity-core.js",
    "behavioral-core.js": "/nora/civilization-behavioral-pattern-engine/behavioral-core.js",
    "meta-reasoning-core.js": "/nora/civilization-meta-reasoning-engine/meta-reasoning-core.js",
    "self-doc-core.js": "/nora/civilization-self-doc-engine/self-doc-core.js",
    "meta-memory-core.js": "/nora/civilization-meta-memory-engine/meta-memory-core.js",
    "logic-core.js": "/nora/civilization-logic-engine/logic-core.js",
    "reality-mapping-core.js": "/nora/civilization-reality-mapping-engine/reality-mapping-core.js",
    "multilayer-synthesis-core.js": "/nora/civilization-multilayer-synthesis-engine/multilayer-synthesis-core.js",
    "unified-abstraction-core.js": "/nora/civilization-unified-abstraction-engine/unified-abstraction-core.js",
    "cross-domain-core.js": "/nora/civilization-cross-domain-engine/cross-domain-core.js",
    "metacognitive-core.js": "/nora/civilization-metacognitive-engine/metacognitive-core.js",
    "coherence-core.js": "/nora/civilization-coherence-engine/coherence-core.js"
};

const MOTHER = "/nora/mother.js";

console.log("🔍 Generation‑7 Diagnostic Started…\n");

let mother = fs.readFileSync(MOTHER, "utf8");
let lines = mother.split("\n");

let fixed = 0;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("require(")) {
        const match = lines[i].match(/require\("(.+)"\)/);
        if (!match) continue;

        const oldPath = match[1];
        const fileName = path.basename(oldPath);

        if (REAL_PATHS[fileName]) {
            if (oldPath !== REAL_PATHS[fileName]) {
                console.log(`⚠️  مسیر اشتباه پیدا شد: ${oldPath}`);
                console.log(`✔️  اصلاح شد → ${REAL_PATHS[fileName]}\n`);
                lines[i] = lines[i].replace(oldPath, REAL_PATHS[fileName]);
                fixed++;
            }
        } else {
            console.log(`❌ فایل ناشناخته: ${fileName}`);
        }
    }
}

if (fixed > 0) {
    fs.writeFileSync(MOTHER, lines.join("\n"));
    console.log(`\n✅ ${fixed} مسیر خراب اصلاح شد.`);
    console.log("🚀 Mother.js با موفقیت ترمیم شد.");
} else {
    console.log("✨ هیچ مسیر خرابی پیدا نشد.");
}

console.log("\n🔧 Diagnostic Completed.");
