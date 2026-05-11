module.exports = {
    name: "Notification Empire",
    type: "CORE_NOTIFICATION_EMPIRE",
    version: 1,

    channels: [],
    templates: [],

    registerChannel(ch) {
        this.channels.push(ch);
        return ch;
    },

    registerTemplate(tpl) {
        this.templates.push(tpl);
        return tpl;
    }
};
