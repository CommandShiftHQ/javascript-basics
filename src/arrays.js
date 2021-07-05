const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => array.toString();

const csvStringToArray = string => string.split(",");

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => array.concat(element);

const removeNthElement = (index, array) => array.splice(index, 1);

const numbersToStrings = numbers => numbers.map(String);

const uppercaseWordsInArray = strings => strings.map(a => a.toUpperCase());

const reverseWordsInArray = strings =>
  strings.map(word => {
    return word
      .split("")
      .reverse()
      .join("");
  });

const onlyEven = numbers => numbers.filter(number => number % 2 === 0);

const removeNthElement2 = (index, array) =>
  array.reduce((result, elem, i) => {
    if (i !== index) result.push(elem);
    return result;
  }, []);

const elementsStartingWithAVowel = strings =>
  strings.filter(str => /^[aeiouAEIOU]/i.test(str));

const removeSpaces = string => string.replace(/\s/g, "");

const sumNumbers = numbers => numbers.reduce((a, b) => a + b);

const sortByLastLetter = strings =>
  strings.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );

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
