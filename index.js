const Numbering = require("./lib/numbering");

const num = new Numbering();

console.log("Sum(3,4): \t\t", num.Sum(3, 4));
console.log("Multiply(3,4): \t\t", num.Multiply(3, 4));
console.log("GetPrimes(4): \t\t", num.GetPrimes(4));
console.log("GetFibonaccy(4): \t", num.GetFibonaccy(4));
