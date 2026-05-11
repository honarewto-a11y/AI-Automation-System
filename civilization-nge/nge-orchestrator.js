/**
 * NGE Orchestrator for NGE28–NGE40
 * جمع‌کردن خروجی همهٔ موتورهای نسل بالا در یک اسنپ‌شات تمدنی
 */

const nge28 = require("./nge28-memory-linked-profiles.js");
const nge29 = require("./nge29-adaptive-knowledge-growth.js");
const nge30 = require("./nge30-pattern-recognition.js");
const nge31 = require("./nge31-long-term-evolution.js");
const nge32 = require("./nge32-civilizational-emotion.js");
const nge33 = require("./nge33-archetype-engine.js");
const nge34 = require("./nge34-narrative-engine.js");
const nge35 = require("./nge35-self-optimization.js");
const nge36 = require("./nge36-prediction-engine.js");
const nge37 = require("./nge37-meta-strategic.js");
const nge38 = require("./nge38-creativity-engine.js");
const nge39 = require("./nge39-consciousness-layer.js");
const nge40 = require("./nge40-grand-engine.js");

/**
 * state می‌تونه شامل این‌ها باشد:
 * {
 *   frame,        // خروجی language-core / Mother
 *   memory,       // وضعیت حافظهٔ تمدنی
 *   behavior,     // وضعیت Behavior Engine
 *   timeline      // رویدادها / لاگ‌ها
 * }
 */
function runAll(state = {}) {
    const topic = state.frame?.structure?.topic || "نامشخص";

    const p28 = nge28.run(topic, state);
    const p29 = nge29.run(topic, state);
    const p30 = nge30.run(state.timeline || []);
    const p31 = nge31.run(state);
    const p32 = nge32.run(state);
    const p33 = nge33.run(topic, state);
    const p34 = nge34.run(state.timeline || []);
    const p35 = nge35.run(state.metrics || {});
    const p36 = nge36.run(state.timeline || []);
    const p37 = nge37.run(state);
    const p38 = nge38.run({ topic, state });
    const p39 = nge39.run({ frame: state.frame, memory: state.memory });
    const p40 = nge40.run({
        frame: state.frame,
        memory: state.memory,
        behavior: state.behavior,
        timeline: state.timeline
    });

    return {
        engine: "NGE-Orchestrator",
        topic,
        snapshot: {
            nge28: p28,
            nge29: p29,
            nge30: p30,
            nge31: p31,
            nge32: p32,
            nge33: p33,
            nge34: p34,
            nge35: p35,
            nge36: p36,
            nge37: p37,
            nge38: p38,
            nge39: p39,
            nge40: p40
        }
    };
}

module.exports = { runAll };
