const fs = require("fs");

module.exports = () => {
    const raw = fs.readFileSync("/nora/telegram/data/products.json");
    return JSON.parse(raw);
};
