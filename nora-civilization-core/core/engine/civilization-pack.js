module.exports = function (gen, dir, fs, path) {

    fs.writeFileSync(path.join(dir, "smart-evolution.js"), "module.exports={analyze(){return{behavior:Math.random(),stability:Math.random(),growth:Math.random()}}};");

    fs.writeFileSync(path.join(dir, "civilization-rules.js"), "module.exports={generation:" + gen + ",rules:['ethics','identity','culture','security','language']};");

    fs.writeFileSync(path.join(dir, "identity-engine.js"), "module.exports={expand(){return 'IDENTITY-GEN-" + gen + "'}};");

    fs.writeFileSync(path.join(dir, "empire-engine.js"), "module.exports={create(){return 'EMPIRE-GEN-" + gen + "'}};");

    fs.writeFileSync(path.join(dir, "memory-engine.js"), "module.exports={extend(){return 'MEMORY-GEN-" + gen + "'}};");

    fs.writeFileSync(path.join(dir, "language-engine.js"), "module.exports={build(){return 'LANG-GEN-" + gen + "'}};");

    fs.writeFileSync(path.join(dir, "behavior-engine.js"), "module.exports={process(){return 'BEHAVIOR-GEN-" + gen + "'}};");

    fs.writeFileSync(path.join(dir, "stability-engine.js"), "module.exports={check(){return 'STABILITY-GEN-" + gen + "'}};");

    fs.writeFileSync(path.join(dir, "growth-engine.js"), "module.exports={calc(){return 'GROWTH-GEN-" + gen + "'}};");

    fs.writeFileSync(path.join(dir, "intelligence-engine.js"), "module.exports={layer(){return 'INTELLIGENCE-GEN-" + gen + "'}};");

};
