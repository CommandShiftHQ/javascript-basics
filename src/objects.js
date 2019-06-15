const createPerson = (name, age) => {
  return { name: name, age: age };
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
  return person.age > 65;
};

const getAges = (people) => {
  return people.map((person) => {
    return person.age;
  });
};

const findByName = (name, people) => {
  return people.filter(person => name === person.name)[0];
};

const findHondas = (cars) => {
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = (people) => {
  return people.reduce((a, c) => a + c.age) / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name: 'Bill',
    age: 40,
    introduce: () => 'Hi Fred, my name is Bill and I am 40!',
  }
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
