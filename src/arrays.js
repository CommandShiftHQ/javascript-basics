const getNthElement = (index, array) => {
  return array[index % array.length]};


const arrayToCSVString = array => {
  return array.toString();
}

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
 array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(number => number.toString());
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(string =>
    string
      .split('')
      .reverse()
      .join('')
      .split(' ')
      .reverse()
      .join(' ')
  );
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const arr = array.slice();
  arr.splice(index, 1);
  return arr;
}

const elementsStartingWithAVowel = strings => {
  return strings.filter(
    string =>
      string.startsWith('a') ||
      string.startsWith('e') ||
      string.startsWith('i') ||
      string.startsWith('o') ||
      string.startsWith('u') ||
      string.startsWith('A') ||
      string.startsWith('E') ||
      string.startsWith('I') ||
      string.startsWith('O') ||
      string.startsWith('U')
  );
};

const removeSpaces = string => {
  return string.replaceAll(' ', '');
};

const sumNumbers = numbers => {
  return numbers.reduce((a, b) => a + b);
};

const sortByLastLetter = strings => {
  return strings.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
