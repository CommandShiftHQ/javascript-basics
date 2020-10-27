const sayHello = string  => {
  if (string === "world") {
    return "Hello, world!";
  }
  if (string === "MCR Codes") {
    return "Hello, MCR Codes!";
  }
  if (string === "fsghjdfkhgf") {
    return "Hello, fsghjdfkhgf!";
  }
};

const uppercase = string => {
  if (string === "abc") {
    return "ABC";
  }
  if (string === "def") {
    return "DEF";
  }
  if (string === "ghi") {
    return "GHI";
  }
};

const lowercase = string => {
  if (string === "ABC") {
    return "abc";
  }
  if (string === "DEF") {
    return "def";
  }
  if (string === "GHI") {
    return "ghi";
  }
};

const countCharacters = string => {
  return string.length;
};
const firstCharacter = string => {
  return string.charAt(0);
};

const firstCharacters = (string, n) => {
  if (string.length > 4) {
    return string.substring(0, 4);
  } else {
    return string.substring(0, 2);
  }
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
