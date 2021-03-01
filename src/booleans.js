const negate = (a) => {
  // your code here
  return !a;
};

const both = (a, b) => {
  return a && b;
};

const either = (a, b) => {
  return a || b;
};

const none = (a, b) => {
  return !a && !b;
};

const one = (a, b) => {
  if ((a && b) || (!a && !b)) {
    return false;
  }
  return true;
};

const truthiness = (a) => {
  if (a) return true;
  return false;
};

const isEqual = (a, b) => {
  if (a === b) return true;
  return false;
};

const isGreaterThan = (a, b) => {
  if (a > b) return true;
  return false;
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) return true;
  return false;
};

const isOdd = (a) => {
  if (a % 2 === 0) return false;
  return true;
};

const isEven = (a) => {
  if (a % 2 === 0) return true;
  return false;
};

const isSquare = (a) => {
  return Math.sqrt(a) % 1 === 0;
};

const startsWith = (char, string) => {
  if (string[0] === char) return true;
  return false;
};

const containsVowels = (string) => {
  return /[aeiou]/gi.test(string);
};

const isLowerCase = (string) => {
  if (string === string.toLowerCase()) return true;
  return false;
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
  isLowerCase,
};
