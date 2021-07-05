
  function createPerson(name, age) {
    // your code here

    return {
      name: name,
      age: age
  };
}

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
 return object.hasOwnProperty(property);
};

const isOver65 = person => {
  // your code here
return person.age > 65;
  
};

const getAges = people => {
  // your code here
  return people.map((ages)=> ages.age)
};

const findByName = (name, people) => {
  // your code here
  return  people.find((item) => item.name === name)
};

const findHondas = cars => {
    // your code here
  return cars.filter(manafac => manafac.manufacturer === "Honda");
};

const averageAge = people => {
  // eslint-disable-next-line func-names
  return people.reduce((acc, curr) => acc + curr.age, 0) / people.length;
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
};
