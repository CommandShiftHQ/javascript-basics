const createPerson = (name, age) => {
  const person= {};
  person.name=name;
  person.age=age;
  return person // your code here
};

const getName = (object) => {
  return object.name;// your code here
};

const getProperty = (property, object) => {
  return object[property];// your code here
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property)// your code here
};

const isOver65 = (person) => {
  if (person.age > 65){
    return true}
  else {return false} ; // your code here
};

const getAges = (people) => {
  return people.map(person => person.age);// your code here
};

const findByName = (name, people) => {
  const findPerson = people.filter(person => person.name === name);
  return findPerson[0]// your code here
};

const findHondas = (cars) => {
  return cars.filter(hondaCar => hondaCar.manufacturer === 'Honda')// your code here

};

const averageAge = (people) => {
  const findAges = people.map(ages=> ages.age);
  const addAges = findAges.reduce((accumulator, currentValue) => accumulator + currentValue);
  return addAges/findAges.length;// your code here
};

const createTalkingPerson = (name, age) => {
  const introduce = {};
  introduce.name = name;
  introduce.age = age;
  introduce.introduce = name => `Hi ${name}, my name is ${introduce.name} and I am ${introduce.age}!`;
  return introduce };
 


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
