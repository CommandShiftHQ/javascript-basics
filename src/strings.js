const sayHello = (string) => {
  return 'Hello, ' + string + '!';
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
  return string.CharAt(1);
};

const firstCharacters = (string, n) => {
  return string.startsWith(n);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
}
