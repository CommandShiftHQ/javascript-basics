export const createPerson = (name, age) => {
  let person = {name: name, age: age};
  return person// your code here
};

export const getName = (object) => {
  return object.name// your code here
};

export const getProperty = (property, object) => {
  return object[property]// your code here
};

export const hasProperty = (property, object) => {
  return object.hasOwnProperty(property)// your code here
};

export const isOver65 = (person) => {
  if (person.age > 65) {return true} else return false// your code here
};

export const getAges = (people) => {
  let agesArray = []
  for(var i=0; i<people.length; i++) {
    agesArray[i] = people[i].age}
    return agesArray
  // your code here
};

export const findByName = (name, people) => {
  for(var i= 0, l = people.length; i< l; i++){
    if(people[i].name === name ){
    return people[i]
    }
  }
  // your code here
};

export const findHondas = (cars) => {
  let newArr = []
  for(let i= 0; i <= cars.length; i++){
   if (cars[i].manufacturer === 'Honda'){
   newArr.push(cars[i])
   }
  return newArr
  }// your code here
};

export const averageAge = (people) => {
  let newArr = []
  for(var i= 0; i < people.length; i++){
   newArr.push(people[i].age)
   }
   let total = newArr.reduce((total, next) => total + next)
   return total / newArr.length
  // your code here
};

export const createTalkingPerson = (name, age) => {
  // your code here
};
