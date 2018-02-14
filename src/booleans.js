export const negate = (a) => {
  return !a// your code here
};

export const both = (a, b) => {
  return a && b// your code here
};

export const either = (a, b) => {
  return a || b// your code here
};

export const none = (a, b) => {
  return !a && !b// your code here
};

export const one = (a, b) => {
  return !a && b || a && !b// your code here
};

export const truthiness = (a) => {
  return Boolean (a)// your code here
};

export const isEqual = (a, b) => {
  return a === b// your code here
};

export const isGreaterThan = (a, b) => {
  return a > b// your code here
};

export const isLessThanOrEqualTo = (a, b) => {
  return a <= b// your code here
};

export const isOdd = (a) => {
  return a % 2 != 0// your code here
};

export const isEven = (a) => {
  return a % 2 === 0// your code here
};

export const isSquare = (a) => {
  return Number.isInteger(Math.sqrt(a))// your code here
};  

export const startsWith = (char, string) => {
  return string.startsWith(char)// your code here
};

export const containsVowels = (string) => {
  let regex1 = RegExp(/[AEIOUaeiou]/)
return regex1.test(string)//
};

export const isLowerCase = (string) => {
  let regex1 = RegExp(/[A-Z]/)
  return !regex1.test(string)// your code here
};
