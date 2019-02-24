const getNthElement = (index, array) => {
  const maxArrayindex = (array.length - 1);
  // console.log(maxArrayindex);
  const indexGiven = index;
  // console.log(indexGiven);

  if (indexGiven > maxArrayindex) {
    const newIndex = indexGiven - 4;
    // console.log('here');
    return array[newIndex];
  }
  return array[indexGiven];
};

const arrayToCSVString = (array) => {
  const csvArray = array.toString();
  return csvArray;
};

const csvStringToArray = (string) => {
  const array = string.split(',');
  return array;
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  if (element !== '') {
    const array2 = array.concat(element);
    return array2;
  }
  return array;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = (numbers) => {
  // const numberStringArray = [];
  // for (let i = 0; i < numbers.length; i++) {
  //   numberStringArray.push(numbers[i].toString());
  // }
  // return numberStringArray;

  function turnIntoString(numberasnumber) {
    return numberasnumber.toString();
  }
  return numbers.map(turnIntoString);
};

const uppercaseWordsInArray = (strings) => {
  // const upperCaseArray = [];
  // for (let i = 0; i < strings.length; i++) {
  //   upperCaseArray.push(strings[i].toUpperCase());
  // }
  // return upperCaseArray;

  function toUpperCase(lowerCaseString) {
    return lowerCaseString.toUpperCase();
  }
  return strings.map(toUpperCase);
};

const reverseWordsInArray = (strings) => {
  const reversedStrings = [];
  for (let i = 0; i < strings.length; i++) {
    const currentString = strings[i];
    let reverseString = '';
    for (let j = currentString.length - 1; j >= 0; j--) {
      reverseString += currentString[j];
    }
    reversedStrings.push(reverseString);
  }
  return reversedStrings;
};

const onlyEven = (numbers) => {
  // const evens = [];
  // return numbers.filter((element) => {
  //   if (element % 2 !== 0) {
  //     return (element[0]);
  //   }
  //   return evens;
  // });
  
};

const removeNthElement2 = (index, array) => {
  const newArray = array.slice(0, index).concat(array.slice(index + 1, array.length));
  return newArray;
};

const elementsStartingWithAVowel = (strings) => {
  // const vowelElements = [];
  // for (let i = 0; i < strings.length; i++) {
  //   const currentString = strings[i];
  //   const lowerString = currentString.toLowerCase();
  //   if (lowerString[0] === 'a' || lowerString[0] === 'e' || lowerString[0] === 'i' || lowerString[0] === 'o' || lowerString[0] === 'u') {
  //     vowelElements.push(currentString);
  //   }
  // }
  // return vowelElements;

  return strings.filter((element) => {
    const lowerString = element.toLowerCase();
    return lowerString[0] === 'a' || lowerString[0] === 'e' || lowerString[0] === 'i' || lowerString[0] === 'o' || lowerString[0] === 'u';
  });
};

const removeSpaces = (string) => {
  const noSpaceString = string.replace(/\s/g, '');
  return noSpaceString;
};

const sumNumbers = (numbers) => {
  // let total = 0;
  // for (let i = 0; i < numbers.length; i++) {
  //   total += numbers[i];
  // }
  // return total;

  function getSum(a, b) {
    return a + b;
  }
  return numbers.reduce(getSum);
};

const sortByLastLetter = (strings) => {
  const reversedStrings = [];
  for (let i = 0; i < strings.length; i++) {
    const currentString = strings[i];
    let reverseString = '';
    for (let j = currentString.length - 1; j >= 0; j--) {
      reverseString += currentString[j];
    }
    reversedStrings.push(reverseString);
  } // Reversed the string to get last letter at the start

  reversedStrings.sort(); // Sort this string by this letter

  const reReversedStrings = [];
  for (let i = 0; i < reversedStrings.length; i++) {
    const currentString2 = reversedStrings[i];
    let reverseString2 = '';
    for (let j = currentString2.length - 1; j >= 0; j--) {
      reverseString2 += currentString2[j];
    }
    reReversedStrings.push(reverseString2);
  } // Reversed the revered string to get the original back but sorted by the last letter
  return reReversedStrings;
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
