const add = (a, b) => {
  return a+b// your code here
};

const subtract = (a, b) => {
  return a-b// your code here
};

const multiply = (a, b) => {
  return a*b// your code here
};

const divide = (a, b) => {
  return a/b// your code here
};

const power = (a, b) => {
  return Math.pow (a,b)// your code here
};

const round = (a) => {
 return Math.round(a) // your code here
};

const roundUp = (a) => {
  return Math.ceil(a)// your code here
};

const roundDown = (a) => {
  return Math.floor(a)// your code here
};

const absolute = (a) => {
  return Math.abs(a)// your code here
};

const quotient = (a, b) => {
  return (a - (a%b)) / b// your code here
};

const remainder = (a, b) => {
  return a%b// your code here
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
  remainder,
};
