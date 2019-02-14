const createPerson = (name, age) => {
  const newPerson = {name: name, age: age};
  return newPerson
};

const getName = (object) => {
  return object.name;
};

const getProperty = (property, object) => {
  return object.age
};

const hasProperty = (property, object) => { 
  if (object.hasOwnProperty(property)) {
    return true; 
  } else {
    return false
  }
};

const isOver65 = (person) => {
  if (person.age > 65) {
    return true }
    else {
      return false
    }
};

const getAges = (people) => {
  let result = people.map(a => a.age);
  return result;
};

const findByName = (name, people) => {
  const result = people.find( x => x.name === name );
  return result
};

const findHondas = (cars) => {
  let found = cars.filter(function(car) {
    return car.manufacturer == 'Honda';
  });
    return found;
}


const averageAge = (people) => { 
  let getAge = (years) => {
    return years.age;
  }
  let sum = (sum, years) => {
    return sum + years;
  }
  let totalAge = people.map(getAge).reduce(sum);
    return (totalAge / (people.map(getAge).length));
};

const createTalkingPerson = (name, age) => { 
  let bill = {
  name: 'Bill',
  age: 40,
  introduce: function () {  
    console.log('Hi my name is ' + name + 'and I am' + age + '!');
  },
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
  createTalkingPerson,
};
