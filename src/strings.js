const sayHello = (world) => {
  return  'Hello, ' + world + '!'; 
};

const uppercase = (abc) => {
  return abc.toUpperCase();
};

const lowercase = (ABC) => {
  return ABC.toLowerCase();
};

const countCharacters = (fsfsgsfdg) => {
  return fsfsgsfdg.length;
};

const firstCharacter = (ABC) => {
  return ABC.charAt(0);
};

const firstCharacters = (sd32fg45, n) => {
  return sd32fg45.substring(0, n);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
