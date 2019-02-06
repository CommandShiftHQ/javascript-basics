const sayHello = (string) => {
 return (`Hello, ${string}!`) // your code here
};

const uppercase = (string) => {
  return string.toUpperCase()// your code here
};

const lowercase = (string) => {
  return string.toLowerCase()// your code here
};

const countCharacters = (string) => {
  return string.length// your code here
};

const firstCharacter = (string) => {
 return string.charAt(0) // your code here
};

const firstCharacters = (string, n) => {
  return string.substring(0,n)// your code here
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
