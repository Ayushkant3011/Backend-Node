const fs = require("fs");
const a= 100;

setImmediate(() => console.log("SetImmediate"));

Promise.resolve("Promise").then(console.log);

fs.readFile("../file.txt", "utf-8", ()=>{
    console.log("File Read");
})


setTimeout(()=> console.log("SetTimeout"),0);

process.nextTick(() => console.log("Process.nextTick"));

function Print(){
    console.log("a = ", a);
}

Print();
console.log("last Line")

// O/P
/**
 * a = 100
 * last line
 * process.nextTick
 * Promise
 * setTimeout
 * setImmediate
 * file read
 * 
 * 
 */