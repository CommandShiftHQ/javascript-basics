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
  return object[property];
};

const hasProperty = (property, object) => {
  // your code here
  if (object[property]) {
    return true;
  } else {
    return false;
  }
};

const isOver65 = person => {
  // your code here
  if (person.age > 65) return true;
  return false;
};

const getAges = people => {
  // your code here
  return people.map(person => {
    return person.age;
  });
};

const findByName = (name, people) => {
  // your code here
  return people.find(people => people.name === name);
};

const findHondas = cars => {
  // your code here
  return cars.filter(cars => cars.manufacturer === 'Honda');
};

const averageAge = people => {
  // your code here
  const total = people.reduce((prevValue, currentValue) => {
    return (prevValue += currentValue.age);
  }, 0);
  return total / people.length;
};

const createTalkingPerson = (name, age) => {
  // your code here
  const talkingPerson = {
    name,
    age,
    introduce: name => {
      return `Hi ${name}, my name is ${talkingPerson.name} and I am ${talkingPerson.age}!`;
    }
  };
  return talkingPerson;
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
