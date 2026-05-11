/**
 * Nora v3 — Brain Cycle Test
 */

const KE = require('/nora-v3/core/knowledge/knowledge-engine');
KE.registerFile('/nora-v3/broken-file.txt');

const Brain = require('/nora-v3/brain');

console.log("=== Nora v3 Brain Cycle Test ===");

(async () => {
    const result = await Brain.cycle();

    console.log("Cycle Result:");
    console.log(result);

    console.log("State Snapshot:");
    console.log(Brain.memory.stateHistory[Brain.memory.stateHistory.length - 1]);

    console.log("Analysis Snapshot:");
    console.log(Brain.memory.cycles[Brain.memory.cycles.length - 1].analysis);

    console.log("Decision Snapshot:");
    console.log(Brain.memory.cycles[Brain.memory.cycles.length - 1].decision);

    console.log("Memory Snapshot:");
    console.log(Brain.memory);
})();
