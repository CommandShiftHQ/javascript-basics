const sayHello = (string) => {
  // your code here
  return  'Hello,' + ' ' + string + '!'
};

const uppercase = (string) => {

  // your code here
  return string.toUpperCase()
};

const lowercase = string => {
  // your code here
  return string.toLowerCase()
};

const countCharacters = string => {
  // your code here
  return string.length;
};

const firstCharacter = string => {
  // your code here
  return string.charAt(0)
};

const firstCharacters = (string, n) => {
  // your code here
  return string.substring(0,n)
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
