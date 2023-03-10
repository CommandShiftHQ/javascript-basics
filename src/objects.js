const createPerson = (name, age) => {
  const person = {
    name,
    age
  };
  return person;
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
  return person.age > 65;
};

const getAges = people => {
  const ages = [];
  for (let i = 0; i < people.length; i++) {
    ages.push(people[i].age);
  }
  return ages;
};

const findByName = (name, people) => {
  const foundName = people.find(person => person.name === name);
  return foundName;
};

const findHondas = cars => {
  const findHonda = cars.filter(car => car.manufacturer === 'Honda');
  return findHonda;
};

const averageAge = people => {
  const ages = [];
  for (let i = 0; i < people.length; i++) {
    ages.push(people[i].age);
  }
  const totalAge = ages.reduce((acc, curr) => acc + curr, 0);
  return totalAge / people.length;
};

const createTalkingPerson = (name, age) => {
  const person = {
    name,
    age,
    introduce(introduceTo) {
      return `Hi ${introduceTo}, my name is ${this.name} and I am ${this.age}!`;
    }
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
