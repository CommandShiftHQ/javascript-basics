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
  // your code here
};

export const findByName = (name, people) => {
  // your code here
};

export const findHondas = (cars) => {
  // your code here
};

export const averageAge = (people) => {
  // your code here
};

export const createTalkingPerson = (name, age) => {
  // your code here
};
