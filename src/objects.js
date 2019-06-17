const createPerson = (name, age) => {
return {
  name:name,
  age: age
  }
}
const getName = (object) => {
  return object.name;
};

const getProperty = (property, object) => {
 return property, object.age;
};

const hasProperty = (property, object) => {
  if (property, object) { 
    return true;
  } else {
    return false; 
  }
};

const isOver65 = (person) => {
  if (person.age > 65) {
    return true;
  } else {
    return false;
  }
};

const getAges = (people) => {
  const ages = people.map((person) => {
    return getProperty('age',person);
  });
  return (ages);
};

const findByName = (name, people) => {
  if (name === people) {
    return [people]; 
 } else {
    return false;
  }
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
  createTalkingPerson,
};
