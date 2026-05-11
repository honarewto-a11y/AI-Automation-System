const fs = require("fs");
const path = require("path");
const autoEvolution = require("./core/engine/auto-evolution-engine.js");

const GEN_PATH = path.join(__dirname, "core/generations");
const CURRENT_FILE = path.join(GEN_PATH, "current.txt");

let currentGen = 1;

if (fs.existsSync(CURRENT_FILE)) {
    currentGen = parseInt(fs.readFileSync(CURRENT_FILE, "utf8"));
}

const newGen = autoEvolution(currentGen);

fs.writeFileSync(CURRENT_FILE, newGen.toString());

console.log("📜 Generation Loader Activated");
console.log("🧬 نسل فعال:", newGen);
console.log("📘 قوانین نسل لود شد: 3 قانون");
console.log("⚙ موتور نسل " + newGen + " فعال شد");
console.log("🔄 Generation Synced:", newGen);
const mother = require("./core/engine/mother-engine.js"); const m = mother(newGen); console.log("👁 Mother Decision Layer:", Object.keys(m.intelligence).length, "لایه هوش تمدنی");
global.currentGeneration = newGen;
console.log("🔥 NoraCivilis Core Loaded (Generation " + newGen + ")");
console.log("✅    Core modules loaded: [ 'root','engine','layers','foundations','identity','rules','tenSteps','displayRules','data','memory','connectors','monitoring','versioning','empires','start','testIdentity','generation' ]");
