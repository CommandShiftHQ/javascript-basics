const negate = (a) => {
  return !(a);
};

const both = (a, b) => {
  return (a)&&(b);
};

const either = (a, b) => {
  return (a)||(b);
};

const none = (a, b) => {
  return !a && !b;
};

const one = (a, b) => {
  return a !== b;
};

const truthiness = (a) => {
  return Boolean(a);
};

const isEqual = (a, b) => {
  return a === b;
};

const isGreaterThan = (a, b) => {
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

const isOdd = (a) => {
  if (a % 2 !== 0) {
    return true}
  else {
     return false
    }
};

const isEven = (a) => {
  if (a % 2 === 0) {
    return true}
  else {
     return false
    }
};
};

const isSquare = (a) => {
  // your code here
};

const startsWith = (char, string) => {
  // your code here
};

const containsVowels = (string) => {
  // your code here
};

const isLowerCase = (string) => {
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
  isLowerCase,
};
