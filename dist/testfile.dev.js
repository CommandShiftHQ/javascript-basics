"use strict";

// function iteration(n){
//    const emptyArray =[];
//   for( var i = 1; i <=n; i++ ){
//     // console.log(i);
//     emptyArray.push(i)
//   }
//   console.log(emptyArray);
// }
// iteration(20);
var jim = {
  name: "Jim",
  age: 60
};
var dilys = {
  name: "Dilys",
  age: 50
};
var marjorie = {
  name: "Marjorie",
  age: 65
};

var getAges = function getAges(people) {
  // your code here
  if (people.age > 65) {
    return true;
  }

  return false;
};

console.log(getAges(jim));