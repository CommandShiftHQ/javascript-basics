const createPerson = (name, age) => {
  return {
    name,
    age
  };
};

const getName = object => object.name;

const getProperty = (property, object) => object[property];

const hasProperty = (property, object) => property in object;

const isOver65 = person => person.age > 65;

const getAges = people => people.map(person => person.age);

const findByName = (name, people) =>
  people.filter(person => person.name === name)[0];

const findHondas = cars => cars.filter(car => car.manufacturer === "Honda");

const averageAge = people => {
  const ages = people.map(person => person.age);
  const average = ages.reduce((a, b) => a + b);
  return average / ages.length;
};

const createTalkingPerson = (name, age) => {
  const person = {
    name,
    age,
    introduce: personname =>
      `Hi ${personname}, my name is ${name} and I am ${age}!`
  };
  return person;
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
