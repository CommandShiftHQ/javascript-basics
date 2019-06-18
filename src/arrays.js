const getNthElement = (index, array) => {
  // your code here
  if (array.length > index) {
    return array[index];
  }
  return array[index - array.length];
};

const arrayToCSVString = (array) => {
  // your code here
  return array.toString();
};

const csvStringToArray = (string) => {
  // your code here
  const str = string.split(',');
  return str;
};

const addToArray = (element, array) => {
  // your code here
  array.push(element);
};

const addToArray2 = (element, array) => {
  // your code here
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  // your code here

  return array.splice(index, 1);
};

const numbersToStrings = (numbers) => {
  // your code here
  return numbers.join().split(',');
};

const uppercaseWordsInArray = (strings) => {
  // your code here
 // return strings.map(text => text.toUpperCase());

 for (let i = 0; i < strings.length; i++) {
     strings[i] = strings[i].toUpperCase();
   }
   return strings;
};

const reverseWordsInArray = (strings) => {
  // your code here
  const newArr = [];
  for (let i = 0; i < strings.length; i++) {
    const newString = strings[i].split('').reverse().join('');
    newArr.push(newString);
  }
  return newArr;
};

const onlyEven = (numbers) => {
  // your 
  
  const even = [];
  for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
      even.push(numbers[i]);
    }
  }
  return even;
};

const removeNthElement2 = (index, array) => {
  // your code here
  return array.filter((_, itemIndex) => itemIndex !== index);
};

const elementsStartingWithAVowel = (strings) => {
  // your code here
  return strings.filter(word => ['a','e','i','o','u'].includes(word[0].toLowerCase()));
};

const removeSpaces = (string) => {
  // your code here
  return string.split(' ').join('');
};

const sumNumbers = (numbers) => {
  // your code here
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

const sortByLastLetter = (strings) => {
  // your code here
  const sorted = []
  for (let i = 0; i < strings.length; i++) {
strings.sort(strings[i].charAt(strings[i].length - 1));
sorted.push(strings[i])
  }
  return sorted;
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
