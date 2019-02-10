const createPerson = (name, age) => {
  return {
    name: name,
    age: age
  };
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
  // if (person.age > 65) {
  //   return true;
  // } else {
  //   return false;
  // }
  return person.age > 65 ? true : false;
};

const getAges = (people) => {
  let result = people.map(person => person.age);
  return result; 
};

const findByName = (name, people) => {
  let person = people.find(obj => obj.name === name);
  return person;
};

const findHondas = (cars) => {
  let hondas = cars.filter(obj => obj.manufacturer === 'Honda');
  return hondas;
};

const averageAge = (people) => {
  let totalAge = 0;
  for (let i = 0; i < people.length; i+=1) {
    totalAge += people[i].age;
  }
  return totalAge / people.length;
};

const createTalkingPerson = (name, age) => {
  function introduce(strangersName) {
    return `Hi ${strangersName}, my name is ${name} and I am ${age}!`;
  }
  return {
    name: name,
    age: age,
    introduce: introduce,
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
