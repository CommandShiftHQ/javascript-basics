const createPerson = (name, age) => {
  return { name: name, age: age };
};

  //const newPerson = {name: name, age: age};
  //return newPerson
//};

const getName = (object) => {
  return object.name;
};

const getProperty = (property, object) => {
  return object.age;
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};
  // if (object.hasOwnProperty(property)) {
  //  return true; 
  // } else {
  //  return false
  // }
// };

const isOver65 = (person) => {
  if (person.age > 65) {
    return true }
    else {
      return false
    }
};

const getAges = (people) => {
  return people.map(x => x.age);
};
  // let result = people.map(a => a.age);
  // return result;
// };

const findByName = (name, people) => {
  const result = people.find( x => x.name === name );
  return result
};

const findHondas = (cars) => {
  return cars.filter(function(car) {
    return car.manufacturer === 'Honda';
  });
};
  // let found = cars.filter(function(car) {
 //   return car.manufacturer == 'Honda';
 //  });
 //   return found;
// }


const averageAge = (people) => { 
  return people.reduce((acc, next) => {
    return acc + next.age;
  }, 0) / people.length;
};

// above is Richard's method. Below is mine before feedback. 

//  let getAge = (years) => {
//    return years.age;
//  }
//  let sum = (sum, years) => {
//    return sum + years;
//  }
//  let totalAge = people.map(getAge).reduce(sum);
//    return (totalAge / (people.map(getAge).length));
// };

const createTalkingPerson = (name, age) => { 
  const newGuy = {
    name: name,
    age: age,
    introduce: (name) => {
      return `Hi ${name}, my name is ${newGuy.name} and I am ${newGuy.age}!`;
    },
  };
return newGuy 
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
