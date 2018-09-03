const getNthElement = (index, array) => {
  if(index > 3 ){
    return array[index - array.length]
  }else {
    return array[index]
  }
};

const arrayToCSVString = (array) => {
  return array.join();
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
  const remove = array.indexOf(index);
  if (index !== -1) {
    array.splice(index, 1);
  }
};

const numbersToStrings = (numbers) => {
  return numbers.map(String);
};

const uppercaseWordsInArray = (strings) => {
  return strings.map(function(strings){
  return strings.toUpperCase();
})
};

const reverseWordsInArray = (strings) => {
  return strings.map(function(strings) {
    return strings.toString().split('').reverse().join('');
  })
  };

const onlyEven = (numbers) => {
  return numbers.filter(function(val){return val %  2 === 0});
};

const removeNthElement2 = (index, array) => {
  let newIndex = array.filter((value) => value != array[index]);
  return newIndex;
};
 
const elementsStartingWithAVowel = (strings) => {
  return strings.filter(function(val) {
    return val.match(/^[aeiou]/gi);
  }
  )};

const removeSpaces = (string) => {
  return string.replace(/\s/g, '');
};

const sumNumbers = (numbers) => {
  let s = 0;
for(let i=0; i< numbers.length; i++)
    s += numbers[i];
    return s;
};

const sortByLastLetter = (strings) => {
  let sorted = strings.sort(function(a, b) {

    if (a[a.length - 1] > b[b.length - 1])
        return 1;
    else if (a[a.length - 1] < b[b.length - 1])
        return -1;

    return 0;

})
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
  sortByLastLetter
}
