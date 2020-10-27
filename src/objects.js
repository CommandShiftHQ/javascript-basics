const createPerson = (name, age) => {
  const People = {
    name: name,
    age: age
  }
  return People;
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
  } else {
    return false;
  }
};

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.find(persons => persons.name === name);
}

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === "Honda");
};

const averageAge = people => {
  const totalAge = people.reduce((prevAge, currentPerson) => {
    return prevAge + currentPerson.age;
  }, 0);
  return totalAge / people.length;
};

const createTalkingPerson = (name, age) => {
  const talkingPerson = {
    name: name,
    age: age,
    introduce: strangersName => { return `Hi ${strangersName}, my name is ${  name  } and I am ${  age }!`
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
