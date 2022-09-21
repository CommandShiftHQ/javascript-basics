function sayHello (string) {
  // your code here
  return 'Hello, ' + string + '!';
};

function uppercase (string) {
  // your code here
  let result = string;
  result = result.toUpperCase();
  return result;
};

function lowercase (string) {
  // your code here
  let result = string;
  result = result.toLowerCase();
  return result;
};

function countCharacters (string) {
  // your code here
  let text = string;
  let length = text.length;
  return length;
};

function firstCharacter (string) {
  // your code here
  let text = string;
  let letter = text.charAt(0);
  return letter;
};

function firstCharacters (string, n) {
  // your code here
  const first = string.slice(0, n);
  return first;
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
