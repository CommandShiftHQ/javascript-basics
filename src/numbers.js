const add = (a, b) => {
  // your code here
  return a + b;
};

const subtract = (a, b) => {
// your code here
  return a - b;
};

const multiply = (a, b) => {
// your code here
  return a * b;
};

const divide = (a, b) => {
// your code here
  return a / b;
};

const power = (a, b) => {
// your code here
  return a ** b;
};

const round = a => {
// your code here
  return Math.round(a);
};

const roundUp = a => {
// your code here
  return Math.ceil(a);
};

const roundDown = a => {
// your code here
  return Math.floor(a);
};

const absolute = a => {
// your code here
  return Math.abs(a);
};

const quotient = (a, b) => {
// your code here
  return Math.trunc(a / b);
};

const remainder = (a, b) => {
// your code here
  return a % b;
};

module.exports = {
add,
subtract,
multiply,
divide,
power,
round,
roundUp,
roundDown,
absolute,
quotient,
remainder
};
