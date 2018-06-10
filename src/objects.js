const createPerson = (name, age) => {
<<<<<<< HEAD
  this.name = name;
  this.age = age;

  let newPerson = new createPerson(name, age)

  return newPerson.name
=======
  return {name:name, age:age};
>>>>>>> 697778748b83f9fc0572e91b8c0ec9614fa6f11e
};

const getName = (object) => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  // return object[property] !== undefined
  return object.hasOwnProperty(property);
};

const isOver65 = (person) => {
  return person.age > 65;
};

const getAges = (people) => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

const findHondas = (cars) => {
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = (people) => {
  return people.reduce(((accumulator, person) => accumulator + person.age), 0) / people.length
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: (friend) => `Hi ${friend}, my name is ${name} and I am ${age}!`
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
}
