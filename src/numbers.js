const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
 return a / b;
};

const power = (a, b) => {
  return a ** b;
};

const round = (a) => {
  return Math.round(a);
};

const roundUp = (a) => {
  return Math.ceil(a);
};

const roundDown = (a) => {
  return Math.floor(a);
};

const absolute = (a) => {
  return Math.abs(a);
};

const quotient = (a, b) => {
<<<<<<< HEAD
  if (Math.floor(a / b) >= 0)
    return Math.floor(a / b) 
  else
    return Math.ceil(a / b);
};

const remainder = (a, b) => {
  return a % b
=======
  const result = a / b;
  if (result < 0 ) {
    return Math.ceil(result);
  }
  return Math.floor(result);
};

const remainder = (a, b) => {
  return a % b;
>>>>>>> a9e8c6eb80186026c83f85f75618f33b473a8311
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
}
