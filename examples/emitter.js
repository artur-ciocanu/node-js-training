const EventEmitter = require("events").EventEmitter;

const emitter = new EventEmitter();

emitter.on("data", data => {
    console.log("Event", data);
});

emitter.emit("data", "Hello World");
