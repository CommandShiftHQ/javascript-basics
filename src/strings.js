function sayHello (string) {
  return "Hello, " + string + "!";
  // your code here
};

function uppercase (string) {
  return string.toUpperCase();
  // your code here
};

function lowercase (string) {
  return string.toLowerCase();
  // your code here
};

function countCharacters (string) {
  return string.length;
  // your code here
};

function firstCharacter (string) {
  return string.charAt(0);
  // your code here
};

function firstCharacters (string, n) {
  return string.substring(0,n);
  // your code here
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
