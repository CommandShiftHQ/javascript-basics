const createPerson = (name, age) => {
  name,
  age,
  createPerson, Function () 
    return "name" + ' ,' + age
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property]
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property)
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return getAges.find(.age);
};

const findByName = (name, people) => {
  return people.find(object => object.name === name);
};

const findHondas = cars => {
  return cars.filter(object => object.manufacturer === "Honda"); 
};

const averageAge = people => {
const totalAge = people.reduce((prevAge, currentPerson) => {
  return prevAge + currentPerson.age;
  }, 0);

  return totalAge / people.length;
};

const createTalkingPerson = (name, age) => ({
  name,
  age,
  introduce: (introduce) => `Hi ${introduce}, my name is ${name} and I am ${age}!`
})
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
