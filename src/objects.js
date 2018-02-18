export const createPerson = (name, age) => {
  return {
    name : name,
    age : age
}
};

export const getName = (object) => {
  return object.name
};

export const getProperty = (property, object) => {
  return object[property]
};

export const hasProperty = (property, object) => {

if(object[property]) {
  return true
}
  else {
    return false
}
};

export const isOver65 = (person) => {
  if(person.age > 65) {
return true
}
else {
return false
}
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
