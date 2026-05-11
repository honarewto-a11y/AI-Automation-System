const adapter = require("./memory-adapter");
const fs = require("fs");
const path = require("path");

module.exports = {
    async get(key) {
        const data = await adapter.read("memory");
        return data && data[key] ? data[key] : null;
    },

    async set(key, value) {
        const storePath = path.join(__dirname, "memory-store.json");
        let store = {};

        try {
            store = require("./memory-store.json");
        } catch (err) {
            store = {
                civilization: "NoraCivilis",
                version: "v1",
                memory: {},
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            };
        }

        store.memory[key] = value;
        store.updated_at = new Date().toISOString();

        fs.writeFileSync(storePath, JSON.stringify(store, null, 2));

        return true;
    },

    async all() {
        try {
            const store = require("./memory-store.json");
            return store.memory || {};
        } catch (err) {
            return {};
        }
    }
};
