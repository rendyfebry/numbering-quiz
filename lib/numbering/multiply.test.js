const { Multiply } = require("./index");

const multiplyCases = [
  {
    name: "Regular",
    inputX: 3,
    inputY: 4,
    expectedOutput: 12
  },
  {
    name: "WithZero",
    inputX: 3,
    inputY: 0,
    expectedOutput: 0
  },
  {
    name: "PositiveNegative",
    inputX: 3,
    inputY: -4,
    expectedOutput: -12
  },
  {
    name: "DoubleNegative",
    inputX: -3,
    inputY: -4,
    expectedOutput: 12
  },
  {
    name: "WithString",
    inputX: 3,
    inputY: "4",
    expectedOutput: 12
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
    expectedOutput: 0
  }
];

describe("Multiply Test", () => {
  multiplyCases.forEach(test => {
    it(test.name, () => {
      const output = Multiply(test.inputX, test.inputY);
      expect(output).toBe(test.expectedOutput);
    });
  });
});
