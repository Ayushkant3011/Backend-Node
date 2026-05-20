// Module protects its variable and functions from Leaking

console.log("Sum Module excuted");

// // This is ES Moules
// export function calSum(a,b){
//     const sum = a+b;

//     console.log(sum)
// }

// This is commonJS 
function calSum(a,b) {
    const sum = a + b;

    console.log(sum);
}


module.exports = calSum; 