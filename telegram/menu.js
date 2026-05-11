module.exports = {
    mainMenu: {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "📞 WhatsApp Destek", url: "https://wa.me/message/LXJQYUJAPOYEO1" }
                ],
                [
                    { text: "ℹ️ Marka Açıklaması", callback_data: "about" }
                ],
                [
                    { text: "💳 Banka Bilgileri", callback_data: "bank" }
                ],
                [
                    { text: "📞 Destek", callback_data: "support" }
                ]
            ]
        }
    }
};
