module.exports = {
    paths: require("./paths/paths"),
    main: require("./main/main"),
    intelligence: require("./intelligence/intelligence")

    ,
    initialize() {
        console.log("⚙ ماژول foundations/foundations.js initialize شد (خودکار)");
    }
};
