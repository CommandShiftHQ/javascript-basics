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
  return a !== b
};

const truthiness = (a) => {
  if (a)
    return true
  else
    return false
};

const isEqual = (a, b) => {
  if (a == b)
    return true
  else
    return false
};

const isGreaterThan = (a, b) => {
  if (a > b)
    return true
  else
    return false
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b)
    return true
  else
    return false
};

const isOdd = (a) => {
  if (a % 2 !== 0)
    return true
  else
    return false
};

const isEven = (a) => {
  if (a % 2 === 0)
    return true
  else
    return false
};

const isSquare = (a) => {
  return Math.sqrt(a) % 1 === 0
};

// 1. sqrt of number
// 2. evaluate if number is integer

const startsWith = (char, string) => {
   return string[0] == char 
};

const containsVowels = (string) => {
    return /([aeiou])/i.test(string)
};

const isLowerCase = (string) => {
    return string.toLowerCase() === string
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
