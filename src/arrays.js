const getNthElement = (index, array) => {
  return array[index % array.length]
};

const arrayToCSVString = (array) => {
  return array.toString()
};

const csvStringToArray = (string) => {
  return string.split(",")
};

const addToArray = (element, array) => {
  array.push(element)
};

const addToArray2 = (element, array) => {
  return array.concat(element)
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1)
};

const numbersToStrings = (numbers) => {
  return String(numbers).split(",")
};

const uppercaseWordsInArray = (strings) => {
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].toUpperCase()
  }
  return strings
};

const reverseWordsInArray = (strings) => {
  const a = strings.join(" ")
  const b = a.split("").reverse().join("").split(" ").reverse().join(",")
  return b.split(",")
};

const onlyEven = (numbers) => {
  const even = (num) => {
    return num % 2 === 0
  }
  return numbers.filter(even)
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = (strings) => {
  // your code here
};

const removeSpaces = (string) => {
  return string = string.replace(/\s/g, '')
};

const sumNumbers = (numbers) => {
  const sum = (a, b) => a + b
  return numbers.reduce(sum)
};

const sortByLastLetter = (strings) => {
  // your code here
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
}
