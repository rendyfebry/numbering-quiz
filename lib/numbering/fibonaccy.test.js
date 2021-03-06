const Numbering = require("./index.js");

const fibonaccyCases = [
  {
    name: "FourFibs",
    input: 4,
    expectedOutput: [0, 1, 1, 2]
  },
  {
    name: "TenFibss",
    input: 10,
    expectedOutput: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  },
  {
    name: "TwentyFiveFibs",
    input: 25,
    expectedOutput: [
      0,
      1,
      1,
      2,
      3,
      5,
      8,
      13,
      21,
      34,
      55,
      89,
      144,
      233,
      377,
      610,
      987,
      1597,
      2584,
      4181,
      6765,
      10946,
      17711,
      28657,
      46368
    ]
  },
  {
    name: "ZeroFibs",
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

describe("Test GetFibonaccy", () => {
  const num = new Numbering();

  fibonaccyCases.forEach(test => {
    it(test.name, () => {
      const output = num.GetFibonaccy(test.input);
      expect(output.length).toBe(test.expectedOutput.length);
      expect(output.join(",")).toBe(test.expectedOutput.join(","));
    });
  });
});
