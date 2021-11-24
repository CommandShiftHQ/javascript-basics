function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function power(a, b) {
  return a ** b;
}

function round(a) {
  return Math.round(a);
}

function roundUp(a) {
  return round(a);
}

function roundDown(a) {
  return floor(a);
}

function absolute(a) {
  return Math.abs(a);
}

function quotient(a, b) {
  return Math.floor(a / b);

}

function remainder(a, b) {
  return a % b;
}

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
