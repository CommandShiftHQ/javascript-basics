function sayHello(string) {
  return "Hello" + string;
};

function uppercase(string) {
  return string.toUpperCase();
};

function lowercase(string) {
  return string.toLowerCase();
};

function countCharacters(string) {
  return string.length;
};

function firstCharacter(string) {
  return string.charAt(1);
};

function firstCharacters(string, n) {
  return string.charAt(n);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
