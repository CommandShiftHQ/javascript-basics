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
  return !a && !b;
};

const one = (a, b) => {
  return !a && b || !b && a;
};

const truthiness = (a) => {
  return !!a;
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
  return a % 2 === 1
};

const isEven = (a) => {
  return a % 2 === 0
};

const isSquare = (a) => {
  return Math.sqrt(a) % 1 === 0
};

const startsWith = (char, string) => {
  return (char === string[0])
};

const containsVowels = (string) => {
  let vowel = /[aeiou]/i
    return vowel.test(string)
};


const isLowerCase = (string) => {
  return (string === string.toLowerCase())
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