export const getNthElement = (index, array) => {
  
if(index >= array.length) {
  
  	return array[index%(array.length)]
}
  else {

    return array[index]
  }
}
};

export const arrayToCSVString = (array) => {
  return array.join()
};

export const csvStringToArray = (string) => {
  return string.split(",")
};

export const addToArray = (array, element) => {
  
return array.push(element)
	
};

export const addToArray2 = (array, element) => {
  array.push(element)
	return array
};

export const removeNthElement = (index, array) => {
  return array.splice(index,1)
};

export const numbersToStrings = (numbers) => {
  return numbers.toString().split(",")
};

export const uppercaseWordsInArray = (strings) => {
let stringsUpper = []
	for(let i = 0; i < strings.length; i++) {
    	stringsUpper.push(strings[i].toUpperCase())
    	}
  return stringsUpper
};

export const reverseWordsInArray = (strings) => {
let arr2 = []
for (let i = 0; i < strings.length; i++)  
  
 {
  
 	let str = ""
 
 	for (let j = strings[i].length - 1; j >=0;  j--)  
  
   		{
    
     			str += (strings[i][j]) ;      
     
   		}    
   
   	arr2.push(str) ;  
  
 }

return arr2

};

export const onlyEven = (numbers) => {
const even = num => {
	return num % 2 === 0;
};

const myEvenArray = numbers.filter(even);
	return(myEvenArray)
};

export const removeNthElement2 = (index, array) => {
	const newArr = [...array]
	newArr.splice(index,1)
  		return newArr
};

export const elementsStartingWithAVowel = (strings) => {
  let vowelsArray =[]


for (let i =0; i < strings.length; i++) {
        if(strings[i][0] === "a" || strings[i][0] === "e" || strings[i][0] === "i" 
         || strings[i][0] === "o" || strings[i][0] === "u" || strings[i][0] === "A" || strings[i][0] === "E" || strings[i][0] === "I" 
         || strings[i][0] === "O" || strings[i][0] === "U") {
     
     vowelsArray.push(strings[i])
     
     }  
    
}
  
return (vowelsArray)

};

export const removeSpaces = (string) => {
  string = string.replace(/\s/g,'');  

return string
};

export const sumNumbers = (numbers) => {

  let sum = numbers.reduce((a, b) => a + b, 0)

    return sum
};

export const sortByLastLetter = (strings) => {
let arr2 = []
	for (let i = 0; i < strings.length; i++)  
  
 {
  
 	let str = ""
 
 		for (let j = strings[i].length - 1; j >=0;  j--)  
  
   		{
    
     			str += (strings[i][j]) ;      
     
   		}    
   
   	arr2.push(str) ;  
  
 }

let arr3 = (arr2.sort())

let arr4 = []

for (let x = 0; x < arr3.length; x++)  
  
 {
  
 	let str1 = ""
 
 	for (let y = arr3[x].length - 1; y >=0;  y--)  
  
   		{
    
     			str1 += (arr3[x][y]) ;      
     
   		}    
   
   	arr4.push(str1) ;  
  
 }

return(arr4)

};
