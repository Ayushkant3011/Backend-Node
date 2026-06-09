const fs = require("fs");
const a = 100;


setImmediate(() => console.log("SetImmediate"));

fs.readFile("../file.txt", "utf-8", ()=>{
    console.log("File read ");
});

setTimeout(() => console.log("Set Timeout"), 0);

function print(){
    console.log("a =" ,a );
    
}


print();
console.log("Last line");

// O/P
/**
 * a = 100
 * last line
 * setTimeout
 * setImmediate
 * file Read
 * 
 */