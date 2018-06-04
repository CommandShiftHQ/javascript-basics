const sayHello = (string) => {
  return `Hello, ${string}!`;
};

const uppercase = (string) => {
  return string.toUpperCase();
};

const lowercase = (string) => {
  return string.toLowerCase();
};

const countCharacters = (string) => {
  return string.length;
};

const firstCharacter = (string) => {
<<<<<<< HEAD
  return string.charAt(0);
};

const firstCharacters = (string, n) => {
  return string.substring(0, n)
=======
  return string[0];
};

const firstCharacters = (string, n) => {
  return string.slice(0, n);
>>>>>>> a9e8c6eb80186026c83f85f75618f33b473a8311
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
}
