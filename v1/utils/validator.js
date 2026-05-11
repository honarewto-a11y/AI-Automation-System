// /nora-v1/utils/validator.js

module.exports = {
    async checkUSDT(txid) {
        if (!txid || txid.length < 10) {
            return { success: false, error: "TXID نامعتبر است" };
        }

        return {
            success: true,
            network: "TRC20",
            txid
        };
    },

    async checkZiraat(receipt) {
        if (!receipt || receipt.length < 5) {
            return { success: false, error: "رسید نامعتبر است" };
        }

        return {
            success: true,
            bank: "Ziraat",
            receipt
        };
    }
};
