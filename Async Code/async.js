const fs = require("fs");
const https = require("https");
const { mulSum } = require("../start with node/calculate/mul");

console.log("Hello World");

const a = 146890;
const b = 267891;


https.get("https://dummyjson.com/products/1",(res) =>{
    console.log("API Data Fetched");
});



setTimeout(() =>{
    console.log("SetTimeout after 5 seconds")
}, 5000);


fs.readFile("./file.txt", "utf-8", (err, data) =>{
    console.log("File Data:", data);
});


var c = mulSum(a, b);

console.log("Multiplication data: ", c);