const negate = (a) => {
<<<<<<< HEAD
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
=======
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
  return !a == b;
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
return a % 2 !== 0;
};

const isEven = (a) => {
  return a % 2 === 0;
};

const isSquare = (a) => {
  return (Math.sqrt(a)) % 1 === 0;
>>>>>>> a9e8c6eb80186026c83f85f75618f33b473a8311
};

// 1. sqrt of number
// 2. evaluate if number is integer

const startsWith = (char, string) => {
<<<<<<< HEAD
   return string[0] == char 
};

const containsVowels = (string) => {
    return /([aeiou])/i.test(string)
};

const isLowerCase = (string) => {
    return string.toLowerCase() === string
=======
  const firstLetter = string[0];
  return firstLetter === char;
  //check what the first letter is
 // then check if that letter = the string
};

const containsVowels = (string) => {
  return /([aeiou])/i.test(string);
};

const isLowerCase = (string) => {
  return string === string.toLowerCase();
>>>>>>> a9e8c6eb80186026c83f85f75618f33b473a8311
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
