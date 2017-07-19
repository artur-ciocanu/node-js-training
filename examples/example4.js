setTimeout(() => console.log("Timeout 1"), 1000);

process.nextTick(() => console.log("Next tick 1"));

setImmediate(() => console.log("Immediate 1"));

setImmediate(() => console.log("Immediate 2"));

setTimeout(() => console.log("Timeout 2"), 3000);

process.nextTick(() => console.log("Next tick 2"));
