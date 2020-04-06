const Numbering = require("./index.js");

const sumCases = [
  {
    name: "Regular",
    inputX: 3,
    inputY: 4,
    expectedOutput: 7
  },
  {
    name: "WithZero",
    inputX: 3,
    inputY: 0,
    expectedOutput: 3
  },
  {
    name: "PositiveNegative",
    inputX: 3,
    inputY: -4,
    expectedOutput: -1
  },
  {
    name: "DoubleNegative",
    inputX: -3,
    inputY: -4,
    expectedOutput: -7
  },
  {
    name: "WithString",
    inputX: 3,
    inputY: "4",
    expectedOutput: 7
  },
  {
    name: "WithString",
    inputX: 3,
    inputY: "bar",
    expectedOutput: 0
  },
  {
    name: "WithNull",
    inputX: 3,
    inputY: null,
    expectedOutput: 0
  },
  {
    name: "WithUndefined",
    inputX: 3,
    expectedOutput: 3
  }
];

describe("Test Sum", () => {
  const num = new Numbering();

  sumCases.forEach(test => {
    it(test.name, () => {
      const output = num.Sum(test.inputX, test.inputY);
      expect(output).toBe(test.expectedOutput);
    });
  });
});
