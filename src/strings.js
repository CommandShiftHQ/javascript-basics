const sayHello = string => `Hello, ${string}!`;

const uppercase = string => string.toUpperCase();

const lowercase = string => string.toLowerCase();

const countCharacters = string => string.length;

const firstCharacter = string => string.charAt(0);

const firstCharacters = (string, n) => string.substring(0, n);

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
