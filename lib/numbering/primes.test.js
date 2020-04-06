const { GetPrimes } = require("./index");

const primesCases = [
  {
    name: "FourPrime",
    input: 4,
    expectedOutput: [2, 3, 5, 7]
  },
  {
    name: "TenPrimes",
    input: 10,
    expectedOutput: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
  },
  {
    name: "TwentyFivePrimes",
    input: 25,
    expectedOutput: [
      2,
      3,
      5,
      7,
      11,
      13,
      17,
      19,
      23,
      29,
      31,
      37,
      41,
      43,
      47,
      53,
      59,
      61,
      67,
      71,
      73,
      79,
      83,
      89,
      97
    ]
  },
  {
    name: "ZeroPrime",
    input: 0,
    expectedOutput: []
  },
  {
    name: "NegativeInput",
    input: -3,
    expectedOutput: []
  },
  {
    name: "InvalidInput",
    input: "aaa",
    expectedOutput: []
  },
  {
    name: "UndefinedInput",
    expectedOutput: []
  }
];

describe("Test GetPrimes", () => {
  primesCases.forEach(test => {
    it(test.name, () => {
      const output = GetPrimes(test.input);
      expect(output.length).toBe(test.expectedOutput.length);
      expect(output.join(",")).toBe(test.expectedOutput.join(","));
    });
  });
});
