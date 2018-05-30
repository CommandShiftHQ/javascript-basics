const negate = (a) => {
  return !a
};

const both = (a, b) => {
  if (a && b === true)
    return true
  else
    return false
};

const either = (a, b) => {
  if (a || b === true)
    return true
  else
    return false
};

const none = (a, b) => {
  if (a || b === true)
    return !true
  else
    return !false
};

const one = (a, b) => {
  if (a && b === true)
    return true
  else
    return false
};

const truthiness = (a) => {
  if (a)
    return true
  else
    return false
};

const isEqual = (a, b) => {
  // your code here
};

const isGreaterThan = (a, b) => {
  // your code here
};

const isLessThanOrEqualTo = (a, b) => {
  // your code here
};

const isOdd = (a) => {
  // your code here
};

const isEven = (a) => {
  // your code here
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
  isLowerCase
}
