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
 return !(!a);
};

export const isEqual = (a, b) => {
  return a == b;
};

export const isGreaterThan = (a, b) => {
  return a > b;
};

export const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

export const isOdd = (a) => {
  return Math.abs(a % 2) == 1;
};

export const isEven = (a) => {
  return Math.abs(a % 2) == 0;
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
