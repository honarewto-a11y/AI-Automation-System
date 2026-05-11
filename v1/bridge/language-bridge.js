const fs = require("fs");
const path = require("path");

class LanguageBridge {
    constructor() {
        this.languages = [];
        this.map = {};
        this.loaded = false;
    }

    load() {
        if (this.loaded) return;

        const filePath = path.join(__dirname, "..", "data", "iso-639-3.tsv");

        if (!fs.existsSync(filePath)) {
            throw new Error("❌ Language file not found: iso-639-3.tsv");
        }

        const lines = fs.readFileSync(filePath, "utf8").trim().split("\n");

        for (let line of lines) {
            const [code, name] = line.split(/\s+/);

            const id = parseInt(code.replace("ncl", ""), 10);

            const entry = {
                id,
                code,
                name
            };

            this.languages.push(entry);
            this.map[id] = entry;
        }

        this.loaded = true;
        console.log("🌉 Language Bridge Loaded — 7000 languages connected.");
    }

    getById(id) {
        this.load();
        return this.map[id] || null;
    }

    getRandom() {
        this.load();
        const index = Math.floor(Math.random() * this.languages.length);
        return this.languages[index];
    }

    getAll() {
        this.load();
        return this.languages;
    }
}

module.exports = new LanguageBridge();
