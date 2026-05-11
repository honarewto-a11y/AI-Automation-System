module.exports = {
    async verify(paymentData) {
        try {
            if (paymentData.type === "usdt") {
                const checkTx = require('../utils/validator').checkUSDT;
                return await checkTx(paymentData.txid);
            }

            if (paymentData.type === "ziraat") {
                const checkCard = require('../utils/validator').checkZiraat;
                return await checkCard(paymentData.receipt);
            }

            return { success: false, error: "Unknown payment type" };

        } catch (err) {
            return { success: false, error: err.message };
        }
    }
};
