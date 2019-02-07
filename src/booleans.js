const negate = (a) => {
  return !a;
};

const both = (a, b) => {
  return a && b;
};

const either = (a, b) => {
  return a || b;
};

const none = (a, b) => {
  return !(a || b);
};

const one = (a, b) => {
  return (a || b) && !(a && b);
};

const truthiness = (a) => {
  return !!a && true;
};

const isEqual = (a, b) => {
  return (a === b) && true;
};

const isGreaterThan = (a, b) => {
  return (a > b) && true;
};

const isLessThanOrEqualTo = (a, b) => {
  return (a <= b) && true;
};

const isOdd = (a) => {
  return ((a % 2) > 0) && true;
};

const isEven = (a) => {
  return ((a % 2) === 0) && true;
};

const isSquare = (a) => {
  return !!(Math.sqrt(a) % 1 === 0) && true;
};

const startsWith = (char, string) => {
  return (string.charAt(0) === char) && true;
};

const containsVowels = (string) => {
  return string.toLowerCase().includes('a') 
          || string.toLowerCase().includes('e')
          || string.toLowerCase().includes('i') 
          || string.toLowerCase().includes('o') 
          || string.toLowerCase().includes('u');
};

const isLowerCase = (string) => {
  return (string === string.toLowerCase());
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
