export const getNthElement = (index, array) => {
  return array[index];
};

export const arrayToCSVString = (array) => {
  return array.join(',')
};

export const csvStringToArray = (string) => {
  // your code here
};

export const addToArray = (array, element) => {
  // your code here
};

export const addToArray2 = (array, element) => {
  // your code here
};

export const removeNthElement = (index, array) => {
  // your code here
};

export const numbersToStrings = (numbers) => {
  // your code here
};

export const uppercaseWordsInArray = (strings) => {
  // your code here
};

export const reverseWordsInArray = (strings) => {
  // your code here
// 
};

export const onlyEven = (numbers) => {
  // your code here
};

export const removeNthElement2 = (index, array) => {
  // your code here
};

const startsWithAVowel = (gfrd) => {
  const vowels = ['a','e','i','o','u']
  const firstCharacter = gfrd.charAt(0);
  return vowels.includes(firstCharacter)
};

export const elementsStartingWithAVowel = (strings) => {
  return strings.filter((word) => {
    return startsWithAVowel(word);
  });
}

//.charAt(0) finds the character at position 0

export const removeSpaces = (string) => {
  // your code here
};

export const sumNumbers = (numbers) => {
  // your code here
};

export const sortByLastLetter = (strings) => {
  // your code here
};
