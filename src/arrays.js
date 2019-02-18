const getNthElement = (index, array) => {
  if (index < array.length) {
    return array[index];
  } else {
    return array[(index - array.length)];
  }
};

const arrayToCSVString = (array) => {
  return array.join(',');
  
  //feedback states to change below to above (although below still passes test?)
  //return array.join();
};

const csvStringToArray = (string) => {
  return string.split(',');
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
  return numbers.map(String) 
};

const uppercaseWordsInArray = (strings) => {
  return strings.map(function(x) {return x.toUpperCase()})
};

const reverseWordsInArray = (strings) => {
  return strings.map(function(x) {return x.split("").reverse().join("")});
};

const onlyEven = (numbers) => {
  return numbers.filter(function(x) {return (x % 2 === 0) } )
};

const removeNthElement2 = (index, array) => {
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
};
  // return array.filter(function(index) {return array.splice(index, 1)});


const elementsStartingWithAVowel = (strings) => {
return strings.filter(str => /^[aeiou]/i.test(str));


// OR the long winded version is: (rex = regular expression)
//let rex = /^[aeiou]/i;
//let results = strings.filter(str => rex.test(str));
//return results  

};

const removeSpaces = (string) => {
  return string.replace(/\s+/g, '');
};

const sumNumbers = (numbers) => {
  return numbers.reduce((x, y) => x + y);
};

const sortByLastLetter = (strings) => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
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
