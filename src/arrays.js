const getNthElement = (index, array) => {
  if (index - array.length === 0) {
    return array[0];
  }
  if (index > array.length) {
    const indexNew = index - array.length;
    return array[indexNew];
  }
  return array[index];
};

const arrayToCSVString = (array) => {
  return array.toString();
};

const csvStringToArray = (string) => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = (numbers) => {
  return numbers.map(String);
};

const uppercaseWordsInArray = (strings) => {
  return strings.map((word) => word.toUpperCase());
};

const reverseWordsInArray = (strings) => {
  return strings.map((word) =>
    word
      .split("")
      .reverse()
      .join("")
  );
};

const onlyEven = (numbers) => {
  return numbers.filter((number) => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
};

const elementsStartingWithAVowel = (strings) => {
  return strings.filter((word) => word.match(/^[aeiou].*$/gi));
};

const removeSpaces = (string) => {
  return string.replace(/\s/g, "");
};

const sumNumbers = (numbers) => {
  return numbers.reduce((a, b) => a + b);
};

const sortByLastLetter = (strings) => {
  return strings.sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)));
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
