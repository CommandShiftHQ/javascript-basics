/* eslint-disable func-names */
const negate = a => {
  // your code here
  return !a;
};

const both = (a, b) => {
  // your code here
  return a && b;
};

const either = (a, b) => {
  // your code here
  return a || b;
};

const none = (a, b) => {
  // your code here
  return !a && !b;
};

const one = (a, b) => {
  // your code here
  if (a || b || a) {
    return true;
  }
  return false;
};

const truthiness = a => {
  // your code her
  if (a) {
    return true;
  }
  return false;
};

const isEqual = (a, b) => {
  // your code here
  return a === b;
};

const isGreaterThan = (a, b) => {
  // your code here
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  // your code here
  return a <= b;
};

const isOdd = a => {
  // your code here
  if (a % 2 !== 0) {
    return true;
  }
  return false;
};

const isEven = a => {
  // your code here
  if (a % 2 == 0) {
    return true;
    // eslint-disable-next-line no-else-return
  } else {
    return false;
  }
};

const isSquare = a => {
  // your code here
  return Math.sqrt(a) === Math.round(Math.sqrt(a));
};

const startsWith = (string, char) => {
  // your code here
  if (string.startsWith(char)) {
    return true;
  }
  return false;
};

const containsVowels = function(string) {
 const vowels = ['a','e','i','o','u'];
//  var stringLowercase = string.toLowerCase()
 for(i = 0; i < vowels.length; i++){
   if (vowels.includes(string.toLowerCase()[i])){
      return true;
   }
  }
  return false;
};

const isLowerCase = string => {
  // your code here
  return string == string.toLowerCase() && string != string.toUpperCase();
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
};

// program to count the number of vowels in a string

// defining vowels

