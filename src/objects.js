export const createPerson = (name, age) => {
  let person = {name: name, age: age};
  return person
};

export const getName = (object) => {
  return object.name
};

export const getProperty = (property, object) => {
  return object[property]
};

export const hasProperty = (property, object) => {
  return object.hasOwnProperty(property)
};

export const isOver65 = (person) => {
  return (person.age > 65)
};

export const getAges = (people) => {
  let agesArray = []
  for(var i = 0; i < people.length; i++) {
    agesArray[i] = people[i].age
  }
  return agesArray
};

export const findByName = (name, people) => {
  for(var i= 0, l = people.length; i< l; i++){
    if(people[i].name === name ){
      return people[i]
    }
  }
};

export const findHondas = (cars) => {
  let newArr = []
  for(let i= 0; i < cars.length; i++){
   if (cars[i].manufacturer === 'Honda'){
   newArr.push(cars[i])
   }
  }
  return newArr
};

export const averageAge = (people) => {
  let newArr = []
  for(var i= 0; i < people.length; i++){
   newArr.push(people[i].age)
  }
  let total = newArr.reduce((total, next) => total + next)
  return total / newArr.length
};

export const createTalkingPerson = (name, age) => {
  const createTalkingPerson = {
    name: name, 
    age: age,
    introduce: function intro(friend) {
      return 'Hi ' + friend + ', my name is ' + name + ' and I am ' + age + '!';
    }
  }
  return createTalkingPerson
};
 
