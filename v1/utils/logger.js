// /nora-v1/utils/logger.js

const fs = require('fs');
const path = require('path');

const ordersPath = path.join(__dirname, '..', 'data', 'orders.json');
const logsPath = path.join(__dirname, '..', 'data', 'logs.json');

function readJSON(filePath) {
    if (!fs.existsSync(filePath)) return [];
    try {
        const raw = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(raw || "[]");
    } catch {
        return [];
    }
}

function writeJSON(filePath, data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

module.exports = {
    async save(order) {
        const orders = readJSON(ordersPath);
        orders.push({
            id: Date.now(),
            ...order
        });
        writeJSON(ordersPath, orders);
    },

    async log(message, meta = {}) {
        const logs = readJSON(logsPath);
        logs.push({
            time: new Date().toISOString(),
            message,
            meta
        });
        writeJSON(logsPath, logs);
    }
};
