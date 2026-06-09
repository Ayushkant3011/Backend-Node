const fs = require("fs");

setImmediate(() => console.log("SetImmediate"));

setTimeout(() => console.log("SetTimeout"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("../file.txt", "utf-8", () =>{
    console.log("file read");
});

process.nextTick(() =>{
    process.nextTick(() => console.log("Inside nextTick"));

    console.log("nextTick");
});

console.log("Last Line");



// O/P

/**
 * last line
 * nextTick
 * inside nextTick
 * Promise
 * setTimeout
 * setImmediate
 * fileRead
 * 
 */

