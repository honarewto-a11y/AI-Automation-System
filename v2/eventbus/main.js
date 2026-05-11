const EventEmitter = require("events");
const bus = new EventEmitter();

console.log("EventBus V2 Started");

module.exports = bus;
