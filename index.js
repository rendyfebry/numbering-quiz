const Numbering = require("./lib/numbering");

const num = new Numbering();

console.log("Sum", num.Sum(3, 4));
console.log("Multiply", num.Multiply(3, 4));
console.log("GetPrimes", num.GetPrimes(4));
console.log("GetFibonaccy", num.GetFibonaccy(4));
