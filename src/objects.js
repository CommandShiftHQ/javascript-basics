const createPerson = (name, age) => {
    return person = {
      name: name,
      age: age
    }
};

const getName = (object) => {
  return object.name;
};

const getProperty = (property, object) => {
  return object.age
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property)
};

const isOver65 = (person) => {
 return person.age > 65
};

const getAges = (people) => {
  
  };

const findByName = (name, people) => {
  // your code here
};

const findHondas = (cars) => {
  // your code here
};

const averageAge = (people) => {
  // your code here
};

const createTalkingPerson = (name, age) => {
  // your code here
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
}
