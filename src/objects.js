const createPerson = (name, age) => {
  return {
    name:name,
    age:age
  };
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
};

const findByName = (name, people) => {
 return people.find (people => people.name === name);
};

const findHondas = cars => {
  return cars.filter(cars => cars.manufacturer === 'Honda');
};

const averageAge = people => {
  if (people.length === 0){
    return 0;
  };
  const totalAge = people.reduce((sum,person) => sum + person.age, 0);
  const average = totalAge / people.length;
  return average;
};

const createTalkingPerson = (name, age) => {
 return {
  introduce: function(otherPerson) {
    return 'Hi' + otherPerson + 'my name is' + name + 'and I am' + age +'!'
  };
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
  createTalkingPerson
};
