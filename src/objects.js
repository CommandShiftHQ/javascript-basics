const createPerson = (name, age) => {
  // your code here
  const givenName = name;
  const givenAge = age;

  const person = {
    name: givenName,
    age: givenAge
  };
  return person;
};

const getName = object => {
  // your code here
  return object.name;
};

const getProperty = (property, object) => {
  // your code here
  const prop = object.property;
  const result = object.prop;
  console.log(property);
  console.log(object);
  return result;
};

const hasProperty = (property, object) => {
  // your code here
};

const isOver65 = person => {
  // your code here
};

const getAges = people => {
  // your code here
};

const findByName = (name, people) => {
  // your code here
};

const findHondas = cars => {
  // your code here
};

const averageAge = people => {
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
  createTalkingPerson
};
