const fs = require("fs");
const path = require("path");

module.exports = function autoEvolutionEngine(currentGen) {

    const nextGen = currentGen + 1;

    const NEXT_PATH = path.join(__dirname, "../generations/gen" + nextGen);

    fs.mkdirSync(NEXT_PATH, { recursive: true });

    const civilizationPack = require("./civilization-pack.js");
const intelligencePack = require("../intelligence/intelligence-pack.js");
    civilizationPack(nextGen, NEXT_PATH, fs, path);
intelligencePack(nextGen, NEXT_PATH, fs, path);

    fs.writeFileSync(
        path.join(NEXT_PATH, "generation-info.json"),
        JSON.stringify({
            generation: nextGen,
            createdAt: new Date().toISOString(),
            status: "ACTIVE"
        }, null, 2)
    );

    console.log("🌱 نسل جدید ساخته شد:", nextGen);

    return nextGen;
};
