export const sayHello = (string) => {
return 'Hello, '+ string + '!'};

export const uppercase = (string) => {
  return string.toUpperCase()// your code he
};

export const lowercase = (string) => {
return string.toLowerCase()
};

export const countCharacters = (string) => {
  return string.length
};

export const firstCharacter = (string) => {
  return string[0]
};

export const firstCharacters = (string, n) => {
  return string.substr(0,n)// your code here
};
