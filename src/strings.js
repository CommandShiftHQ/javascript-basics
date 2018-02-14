export const sayHello = (string) => {
  return 'Hello,' + ' ' + string + '!';
};

export const uppercase = (string) => {
  return string.toUpperCase();
};

export const lowercase = (string) => {
  return string.toLowerCase();
};

export const countCharacters = (string) => {
  return string.length;
};

export const firstCharacter = (string) => {
  return string.charAt(0);
};

export const firstCharacters = (string, n) => {
  return string.substring(0, n);
};
