const { arrayToCSVString } = require("./arrays");

const createPerson = (name, age) => {
  return {
    name: name,
    age: age,
  };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  };
  return false;
};

const getAges = people => {
  return people.map(people => people.age);
};

const findByName = (name, people) => {
  return people.find(people => people.name === name);
};

const findHondas = cars => {
  return cars.filter(cars => cars.manufacturer === "Honda");
};

const averageAge = people => {
  let index = 0;
  people.forEach((person) => { index += person.age });
  return (index / people.length);
};


const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,

    introduce: (newPerson) => `Hi ${newPerson}, my name is ${name} and I am ${age}!`
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
