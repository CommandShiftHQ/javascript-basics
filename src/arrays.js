const getNthElement = (index, array) => {
  // your code here
  return array.at(index % array.length);
};

const arrayToCSVString = array => {
  // your code here
  return array.join(',');
};

const csvStringToArray = string => {
  // your code here
  return string.split(',');
};

const addToArray = (element, array) => {
  // your code here
  array.push(element);
};

const addToArray2 = (element, array) => {
  // your code here
  return [...array, element];
};

const removeNthElement = (index, array) => {
  // your code here
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  // your code here
  return numbers.map(number => `${number}`);
};

const uppercaseWordsInArray = strings => {
  // your code here
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  // your code here
  return strings.map(string => [...string].reverse().join(''));
};

const onlyEven = numbers => {
  // your code here
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  // your code here
  const copyArray = [...array];
  copyArray.splice(index, 1);
  return copyArray;
};

const elementsStartingWithAVowel = strings => {
  // your code here
  const regex = new RegExp('^[aeiou]', 'i');
  return strings.filter(string => regex.test(string));
};

const removeSpaces = string => {
  // your code here
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
  // your code here
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

const sortByLastLetter = strings => {
  // your code here
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
