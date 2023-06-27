//const array=["cat","dog","elephant","fox"];
const getNthElement = (index, array) => {
  if (index>0 && index<=array.length-1){
    return array[index];
  }
  if(index>array.length-1){
      return array[index-4];
    }
  if(index===0){
    return array[0];
  }
    };
  
  // your code here

  
const arrayToCSVString = array => {
  
  let n =[array];
  return n.toString();
};


const csvStringToArray = string => {
  return string.split(",");
  // your code here
};

//const array = [];
//const array2 = [1, 2, 3];
const addToArray = (element, array) => {
   array.push(element);
  

  // your code here
};

const array = ['a', 'b', 'c'];
const array2 = [1, 2, 3];
const addToArray2 = (element, array) => {
  let newArray=array.concat(element);
  return newArray;
  // your code here
};

const removeNthElement = (index, array) => {
  return array.splice(index,1);
  // your code here
};

const numbersToStrings = numbers => {
  const m=numbers.toString();
  return m.split(',');
  // your code here
};

const uppercaseWordsInArray = strings => {
  const newString=strings.map((str) =>str.toUpperCase())
  return newString;
  // your code here
};

const reverseWordsInArray = strings => {
  return strings.map(string => string.split('').reverse().join(''));
}



const onlyEven = numbers => {
  let Array5=numbers.filter(number => number%2===0);
  return Array5;

};


const removeNthElement2 = (index,array) => {
  return array.filter((element)=>{
    if (element!==array[index]){
      return element
    }
  })
}

 
const elementsStartingWithAVowel = strings => {
  return strings.filter((string)=>{
    if(string.charAt(0)==="a"||string.charAt(0)==="e"||string.charAt(0)==="i"||string.charAt(0)==="o"||string.charAt(0)==="u"||string.charAt(0)==="A"||string.charAt(0)==="E"||string.charAt(0)==="I"||string.charAt(0)==="O"||string.charAt(0)==="U"){
      return string
    }
  })
    
  }





  

const removeSpaces = string => {
  const stringArray=string.split(" ");
  const namesCombined=stringArray.reduce((acc,curr)=>{
    return acc+curr
  })
  return namesCombined;
};

const sumNumbers = numbers => {
  const sumNumbers=numbers.reduce((acc,curr)=>{
    return acc+curr;
  })
  return sumNumbers;
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) =>
    (a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
  )}



  //const stringy= strings.map((string)=>{
    //return string.split("").reverse().join("")
  //}) 
  //const newS=stringy.sort();
    //return newS.split("").reverse().join("")




//

 



  


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
