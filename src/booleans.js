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
  return a % 2 == !0;
};

export const isEven = (a) => {
  // modulus operator % finds the remainder of division. If there is no remainder after division by 2, a number is even
  return a % 2 == 0;
};

export const isSquare = (a) => {
  // Check if sqrt is complete number i.e. integer
  return Math.sqrt(a) % 1 === 0;
};

export const startsWith = (char, string) => {
  return string.substr(0,1) == char;
};

export const containsVowels = (string) => {
  /* This just matches against the regex (g makes it search the whole string, 
     i makes it case-insensitive) and returns true if the string contains vowels. 
     We check for null incase there are no matches (ie no vowels), and return false in that case.
  */
  var m = string.match(/[aeiou]/gi);
  return m === null ? false : true;
};

export const isLowerCase = (string) => {
  return string === string.toLowerCase();
};
