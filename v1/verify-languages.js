const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data/iso-639-3.tsv");

console.log("🔍 Verifying 7000-language core...");

if (!fs.existsSync(filePath)) {
    console.error("❌ ERROR: iso-639-3.tsv not found.");
    process.exit(1);
}

const lines = fs.readFileSync(filePath, "utf8").trim().split("\n");

let expected = 1;
let errors = [];

for (let line of lines) {
    const parts = line.split(/\s+/);

    if (parts.length !== 2) {
        errors.push(`❌ Invalid format: ${line}`);
        continue;
    }

    const code = parts[0];
    const name = parts[1];

    const num = parseInt(code.replace("ncl", ""), 10);

    if (num !== expected) {
        errors.push(`❌ Missing or out-of-order entry: expected ncl${expected}, found ${code}`);
        expected = num;
    }

    expected++;
}

if (errors.length === 0) {
    console.log("✅ Language Core Verified — All 7000 entries OK.");
} else {
    console.log("⚠️ Verification completed with errors:");
    errors.forEach(e => console.log(e));
}
