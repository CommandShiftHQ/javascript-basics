function add (a, b) {
  return a+b;
  // your code here
}

function subtract (a, b) {
  return a-b;
  // your code here
}

function multiply (a, b) {
  return a*b;
  // your code here
}

function divide (a, b) {
  return a/b;
  // your code here
}

function power (a, b) {
  return a**b;
  // your code here
}

function round (a) {
  return Math.round(a);
  // your code here
}

function roundUp (a) {
  return Math.ceil(a);
  // your code here
}

function roundDown (a) {
  return Math.floor(a);
  // your code here
}

function absolute (a) {
  return Math.abs(a);
  // your code here
}

function quotient (a, b) {
  return Math.trunc(a/b);
  // your code here
}

function remainder (a, b) {
  return a%b;
  // your code here
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
