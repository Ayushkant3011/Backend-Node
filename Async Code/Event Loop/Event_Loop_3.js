const fs = require("fs");

setImmediate(()=>console.log("SetImmediate"));

setTimeout(()=>console.log("SetTimeout"),0);

Promise.resolve("Promise").then(console.log);

fs.readFile("../file.txt", "utf-8", ()=>{
    setTimeout(() =>console.log("Inside SetTimeout"), 0);

    process.nextTick(()=>console.log("Inside Process.nextTick"));

    setImmediate(()=>console.log("Inside setImmediate"));

    console.log("file Read")
});


process.nextTick(() => console.log("Process.nextTick"));

console.log("Last line")

// O/P

/**
 * last line
 * process.nextTick
 * Promise
 * setTimeout
 * setImmediate
 * file read
 * inside process.nextTick
 * inside setImmediate
 * inside setTimeout
 * 
 */