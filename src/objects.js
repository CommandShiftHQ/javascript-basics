const createPerson = (name, age) => {
  const person = {
    name: name,
    age: age,
  };
  return person;
};

const getName = (object) => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = (person) => {
  if (person.age > 65) {
    return true;
  }
  return false;
};

const getAges = (people) => {
  const ages = people.map((person) => {
    return getProperty('age',person);
  });
  return (ages);
};

const findByName = (name, people) => {
  // your code here
};

const findHondas = (cars) => {
  // your code here
};

const averageAge = (people) => {
  // your code here
};

const createTalkingPerson = (name, age) => {
  // your code here
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
  createTalkingPerson,
};
