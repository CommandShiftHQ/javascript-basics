const createPerson = (name, age) => {
  return { name, age };
};

const getName = (object) => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object[property]) return true;
  return false;
};

const isOver65 = (person) => {
  if (person.age > 65) return true;
  return false;
};

const getAges = (people) => {
  return people.map((p) => p.age);
};

const findByName = (name, people) => {
  return people.find((p) => p.name === name);
};

const findHondas = (cars) => {
  return cars.filter((c) => c.manufacturer === "Honda");
};

const averageAge = (people) => {
  return people.map((p) => p.age).reduce((a, b) => a + b) / people.length;
};

const createTalkingPerson = (name, age) => {
  const introduce = (friend) => {
    return `Hi ${friend}, my name is ${name} and I am ${age}!`;
  };
  return { name, age, introduce };
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
