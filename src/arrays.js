const getNthElement = (index, array) => {
  return array[index];
};

const arrayToCSVString = (array) => {
  return array.join();
};

const csvStringToArray = (string) => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const a2 = array.slice(0, array.length);
  a2.push(element);
  return a2;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = (numbers) => {
  return numbers.map(function (number) {
    return String(number);
  });
};

const uppercaseWordsInArray = (strings) => {
  return strings.map((s) => s.toUpperCase());
};

const reverseWordsInArray = (strings) => {
  return strings.map((item) => item.split("").reverse().join(""));
};

const onlyEven = (numbers) => {
  return numbers.filter(function(x) {
    return (x % 2 === 0 || x === 0);
  });
};

const removeNthElement2 = (index, array) => {
  array.splice(index, 2);
};

const elementsStartingWithAVowel = (strings) => {
  return strings.filter(element => {
    const lower = element.toLowerCase();
    return lower.startsWith('a') || lower.startsWith('e') || lower.startsWith('i') || lower.startsWith('u') || lower.startsWith('o');  
  });
};

const removeSpaces = (string) => {
  const r = / /gi;
  return string.replace(r, '');
};

const sumNumbers = (numbers) => {
  return numbers.reduce();
};

const sortByLastLetter = (strings) => {
  
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
  sortByLastLetter,
};
