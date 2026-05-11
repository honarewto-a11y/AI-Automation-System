const fs = require("fs");
const path = require("path");

const FILE = path.join(__dirname, "..", "MEMORY.LONGTERM.json");

function load() {
    if (!fs.existsSync(FILE)) return [];
    try {
        const raw = fs.readFileSync(FILE, "utf8");
        const parsed = JSON.parse(raw || "[]");
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

function save(all) {
    fs.writeFileSync(FILE, JSON.stringify(all, null, 2));
}

function append(entry) {
    const all = load();
    all.push(entry);
    save(all);
    return entry;
}

module.exports = {
    load,
    append,
    file: FILE
};
