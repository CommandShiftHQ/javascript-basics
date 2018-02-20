export const negate = (a) => {
  return !a
};

export const both = (a, b) => {
  return a && b
};

export const either = (a, b) => {
  return a || b
};

export const none = (a, b) => {
  return !a && !b
};

export const one = (a, b) => {
  return !a && b || a && !b
};

export const truthiness = (a) => {
  return Boolean (a)
};

export const isEqual = (a, b) => {
  return a === b
};

export const isGreaterThan = (a, b) => {
  return a > b
};

export const isLessThanOrEqualTo = (a, b) => {
  return a <= b
};

export const isOdd = (a) => {
  return a % 2 != 0 
};

export const isEven = (a) => {
  return a % 2 === 0
};

export const isSquare = (a) => {
  return Number.isInteger(Math.sqrt(a))
};  

export const startsWith = (char, string) => {
  return string.startsWith(char)
};

export const containsVowels = (string) => {
  let regex1 = RegExp(/[AEIOUaeiou]/)
  return regex1.test(string)
};

export const isLowerCase = (string) => {
  let regex1 = RegExp(/[A-Z]/)
  return !regex1.test(string)
};
