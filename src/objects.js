const createPerson = (name, age) => {
  return { name: name, age: age };
};

const getName = (object) => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (property in object) {
    return true;
  }
  return false;
};

const isOver65 = (person) => {
  if (person.age > 65) {
    return true;
  }
  return false;
};

const getAges = (people) => {
  const agesArray = [];
  for (let i = 0; i < people.length; i++) {
    agesArray.push(people[i].age);
  }
  return agesArray;
};

const findByName = (name, people) => {
  // const filteredNames = [];
  // for (let i = 0; i < people.length; i++) {
  //   // console.log(people.name);
  //   if (this.name === name) {
  //     filteredNames.push(people[i]);
  //   }
  // }

  return people.find((person) => {
    return person.name === name;
  });
};

const findHondas = (cars) => {
  const hondas = [];
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].manufacturer === 'Honda') {
      hondas.push(cars[i]);
    }
  }
  return hondas;
};

const averageAge = (people) => {
  const agesArray = [];
  for (let i = 0; i < people.length; i++) {
    agesArray.push(people[i].age);
  }
  let totalAge = 0;
  for (let j = 0; j < agesArray.length; j++) {
    totalAge += agesArray[j];
  }
  const averageAgeValue = totalAge / agesArray.length;
  return averageAgeValue;
};

const createTalkingPerson = (name, age) => {
  
  function sayHello() {
    const sayHello1 =  'Hi ' + this.name;
  }

  name.sayHello1();

  sayHello1 += ' my name is' + name + ' and I am 40!';
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
