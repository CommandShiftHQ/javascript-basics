const getNthElement = (index, array) => {
if (index > array.length -1) {
  return array[index % array.length]
} else { return array[index]}
};

const arrayToCSVString = (array) => {
  return array.toString()
};

const csvStringToArray = (string) => {
  return string.split(',')
};

const addToArray = (element, array) => {
   array.push(element)
};

const addToArray2 = (element, array) => {
  return newArray2 = array.concat(element);
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = (numbers) => {
  return numbers.map(strings => strings.toString());
};

const uppercaseWordsInArray = (strings) => {
  return strings.map(uppercase => uppercase.toUpperCase());
};

const reverseWordsInArray = (strings) => {
    return strings.map(reversed => reversed.split("").reverse().join(""));
};

const onlyEven = (numbers) => {
    return numbers.filter(number => number % 2 === 0 )
};

const removeNthElement2 = (index, array) => {
  return array.filter(arrFil => arrFil !== array[index]);
};

const elementsStartingWithAVowel = (strings) => {
    return strings.filter(arrFil => arrFil.charAt(0) === 'a' ||
    arrFil.charAt(0) === 'e' || arrFil.charAt(0) === 'i' || 
    arrFil.charAt(0) === 'o' || arrFil.charAt(0) === 'u' || 
    arrFil.charAt(0) === 'A' || arrFil.charAt(0) === 'E' || 
    arrFil.charAt(0) === 'I' || arrFil.charAt(0) === 'O' ||
    arrFil.charAt(0) === 'U')
  };

const removeSpaces = (string) => {
    return string.replace(/\s/g,'');
  
};

const sumNumbers = (numbers) => {
      return numbers.reduce(function(total,curVal) {
       return  total + curVal;
     })
};

const sortByLastLetter = (strings) => {
    return strings.sort((cur,next) => cur.charCodeAt(cur.length-1) -
    next.charCodeAt(next.length-1));
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
