const createPerson = (name, age) => {
  return {name: name, age: age};
};

const getName = object => object.name;

const getProperty = (property, object) => object[property];

const hasProperty = (property, object) => object.hasOwnProperty(property);

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  }
  return false;
};

const getAges = people => people.map(person => person.age);

const findByName = (name, people) => people.find(person => person.name === name);

const findHondas = cars => cars.filter(car => car.manufacturer === "Honda");

const averageAge = people => people.reduce((accumulator, current) => accumulator + current.age, 0) / people.length;

const createTalkingPerson = (name, age) => {
  this.name = name;
  this.age = age;
  this.introduce = function (recipient) {
    return "Hi " + recipient + ", my name is " + this.name + " and I am " + this.age + "!";
  }
  return this;
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
