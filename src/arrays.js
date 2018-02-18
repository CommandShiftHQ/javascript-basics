

export const getNthElement = (index, array) => {
  if (index + 1 > array.length){
    return array[index - array.length];
  }
  return array[index];
};

export const arrayToCSVString = (array) => {
  return array.toString('');
};

export const csvStringToArray = (string) => {
  string = string.replace(/,/g, '');
  
  return string.split('');
};

export const addToArray = (array, element) => {
  element.push(array);
};

export const addToArray2 = (element, array) => {
  let arrayClone = array.slice();
  arrayClone.push(element);
  return arrayClone;
};

export const removeNthElement = (index, array) => {
   
  return array.splice(index, 1);
};

export const numbersToStrings = (numbers) => {
  return numbers.toString().split(',');
};

export const uppercaseWordsInArray = (strings) => {
  let stringsUpper = String(strings).toUpperCase().split(",");
  return stringsUpper;
};

export const reverseWordsInArray = (strings) => {
  for(let i =0; i<strings.length; i++){
    strings[i] = strings[i].split('').reverse().join('');
  }
  return strings;
}


export const onlyEven = (numbers) => {
  return numbers.filter(number => number % 2 ===0);
};

export const removeNthElement2 = (index, array) => {
  return array.slice(0, index).concat(array.slice(index+1));
  
};

export const elementsStartingWithAVowel = (strings) => {
  
  const vowels = ['a','e','i','o','u'];
  let newArray = [];
  for (let i=0; i<strings.length; i++){
    for (let j=0; j<vowels.length; j++){
      if (strings[i].charAt(0).toLowerCase() == vowels[j]){
        newArray.push(strings[i]);
      }
    }
  }
  return newArray;
};

export const removeSpaces = (string) => {
  let string2 = string.replace(/ /g, '');
  return string2;
};

export const sumNumbers = (numbers) => {
  let total = 0;
  for (let number = 0; number <numbers.length; number ++){
    total += numbers[number];
  }
  return total;
};

export const sortByLastLetter = (strings) => {
    strings.sort(function (a, b){
    let lastA = a.charAt(a.length - 1); //last letter of word a
    let lastB = b.charAt(b.length - 1); //last letter of word b
    if (lastA > lastB){  
      return 1;    // return 1 means put b before a
    }else if (lastA < lastB){
      return -1;   // a before b
    }else{   
      return 0; // a and b equal e.g same letter
    }
  })
  return strings;
};
