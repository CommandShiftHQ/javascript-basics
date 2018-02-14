export const negate = (a) => {
  return !a;
};

export const both = (a, b) => {
  return (a && b);
};

export const either = (a, b) => {
  return (a || b)  || (b || a);
};

export const none = (a, b) => {
  return (!a && !b);
};

export const one = (a, b) => {
  return (!a && b) || (a && !b);
};

export const truthiness = (a) => {
  // your code here
};

export const isEqual = (a, b) => {
  // your code here
};

export const isGreaterThan = (a, b) => {
  // your code here
};

export const isLessThanOrEqualTo = (a, b) => {
  // your code here
};

export const isOdd = (a) => {
  // your code here
};

export const isEven = (a) => {
  // your code here
};

export const isSquare = (a) => {
  // your code here
};

export const startsWith = (char, string) => {
  // your code here
};

export const containsVowels = (string) => {
  // your code here
};

export const isLowerCase = (string) => {
  // your code here
};
