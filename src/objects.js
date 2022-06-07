const createPerson = (name, age) => {
  const person = {
    name: name,
    age: age
  };
  return person;
};
const getName = object => {
return object.name;

};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
if (object.hasOwnProperty(property)) {
  return true;
} else {
  return false;
}

};

const isOver65 = person => {
if (person.age > 65) {
  return true; 
} else {
  return false;
}

};

const getAges = people => {
  console.log(people);
  const getAge = people.map(function(e) {
    return e.age;
  });
  console.log(getAge);
  return getAge;
};

const findByName = (name, people) => {
//  for (let i = 0; i < people.length; i++){
//     if (name === people[i]['name']) {
//       console.log(people[i]);
//       return people[i];
//     }
//   }
  return people.find(person => person.name === name)
};

const findHondas = cars => {
  const hondasOnly = cars.filter(car => car.manufacturer === 'Honda');
  return hondasOnly;
};


const averageAge = people => {
  let sum = 0;
  for (let i = 0; i < people.length; i++) {
    sum += people[i].age;
    console.log(sum);
  }
  return sum / people.length;
};


const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: personName => {
      return `Hi ${personName}, my name is ${name} and I am ${age}!`;
    }
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
