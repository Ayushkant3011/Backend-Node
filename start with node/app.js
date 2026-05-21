require("./xyz.js"); // Importing anotehr module to the main file 

// const calSum = require("./sum.js"); // THIS IS COMMONJS
// import { calSum } from "./sum.js"; // THIS IS ES MODULES

const {calSum, mulSum} = require("./calculate");


var name = "Ayush";

var a =10;
var b =10;

console.log(name);
console.log(a+b);


calSum(a,b);

mulSum(a,b);
// console.log(global);