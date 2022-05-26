const getNthElement = (index, array) => {
  return array.at(index % array.length);
};

const arrayToCSVString = array => {
  return array.join(',');
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return [...array, element];
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(number => `${number}`);
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(string => [...string].reverse().join(''));
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const copyArray = [...array];
  copyArray.splice(index, 1);
  return copyArray;
};

const elementsStartingWithAVowel = strings => {
  const regex = new RegExp('^[aeiou]', 'i');
  return strings.filter(string => regex.test(string));
};

const removeSpaces = string => {
  return [...string]
    .reduce((acc, curr) => {
      if (curr !== ' ') {
        acc.push(curr);
      }
      return acc;
    }, [])
    .join('');
};

const sumNumbers = numbers => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

const sortByLastLetter = strings => {
  return strings.sort((stringA, stringB) =>
    stringA.at(-1).localeCompare(stringB.at(-1))
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
