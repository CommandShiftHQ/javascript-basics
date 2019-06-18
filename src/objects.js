const createPerson = (name, age) => {
  // your code here
  return {
    name: name,
    age: age,
  };
};

const getName = (object) => {
  // your code here
  return object.name;
};

const getProperty = (property, object) => {
  // your code here
  return object[property];
};

const hasProperty = (property, object) => {
  // your code here
  return (object.hasOwnProperty(property));
};


const isOver65 = (person) => {
  // your code here
  if (person.age > 65) {
    return true;
  }
  return false;
};

const getAges = (people) => {
  // your code here
  return people.map((person) => {
    return person.age;
  });
};

const findByName = (name, people) => {
  // your code here
  return people.find((person) => name === person.name);
};

const findHondas = (cars) => {
  // your code here
  return cars.filter(car => car.manufacturer === 'Honda');
};


const averageAge = (people) => {
  // your code here
  return people.reduce(avAg => people.age / people.length);
};

const createTalkingPerson = (name, age) => {
  // your code here
  return {
    introduce: (name2) => {
      return 'Hi' ${name2}, 'my name is' ${name} 'and I am' ${age}'!';
    }
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
  createTalkingPerson,
};
