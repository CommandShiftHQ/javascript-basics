const sayHello = string => {
  return ("Hello, " + string + "!");
};

const uppercase = string => {
  return string.toUpperCase();
};

const lowercase = string => {
  return string.toLowerCase();
};

const countCharacters = string => {
  return string.length;
};

const firstCharacter = string => {
  return string.charAt(0);
};

const firstCharacters = (string, n) => {
  return string.substring(0, n);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
