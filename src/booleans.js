function negate(a) {
  return !a;
};

function both(a, b) {
  return (a && b);
};

function either(a, b) {
  return a || b;
};

function none(a, b) {
  return !(a || b);
};

function one(a, b) {
  if ((a === true && b === false) || (a === false && b === true)) {
    return true;
  } else return false;
};

function truthiness(a) {
  return Boolean(a);
};

function isEqual(a, b) {
  return a === b;
};

function isGreaterThan(a, b) {
  return a > b;
};

function isLessThanOrEqualTo(a, b) {
  return a <= b
};

function isOdd(a) {
  if (a%2 !== 0) {
  return true;
  } else return false;
};

function isEven(a) {
  if (a%2 === 0) {
  return true;
  } else return false;
};

function isSquare(a) {
  if (Number.isInteger(Math.sqrt(a))){
    return true;
  } else return false;

};

function startsWith(char, string) {
  if (string[0] === char){
    return true;
  } else return false;
};

function containsVowels(string) {
  // your code here
};

function isLowerCase(string) {
  // your code here
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
