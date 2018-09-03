const createPerson = (name, age) => {
  return {name: name, age: age};
};

const getName = (object) => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if(property in object){
    return true;
  } else {
    return false;
  }
  };

const isOver65 = (person) => {
  if(person.age > 65) {
    return true;
  } else {
    return false;
  }
};

const getAges = (people) => {
  let allAges = [];
  people.forEach(function(people) {
    allAges.push(people.age);
  })
  return allAges;
};

const findByName = (name, people) => {
  return people.find(people => people.name === name);
};

const findHondas = (cars) => {
  // your code
};

const averageAge = (people) => {
  // your code here
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: function() {
     return (`Hi Fred, my name is ${name} and I am ${age}!`);
    }
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
  createTalkingPerson
}
