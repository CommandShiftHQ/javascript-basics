export const createPerson = (name, age) => {
  let person = {
  name: name,
  age: age
  }
  return person;
};

export const getName = (object) => {
  return object.name;
};

export const getProperty = (property, object) => {
  return object.age;
};

export const hasProperty = (property, object) => {
  if (object.hasOwnProperty(property)){
    return true; 
  }else{
    return false;
  }
};

export const isOver65 = (person) => {
  if (person.age > 65){
    return true;
  }else{
    return false;
  }
};

export const getAges = (people) => {
  let peopleAge = [];
  for (let i = 0; i< people.length; i++){
    peopleAge.push(people[i].age);
  }
  return peopleAge;
};

export const findByName = (name, people) => {

   let found = people.findIndex((person) => {
     return person.name === name;
  });
  return people[found];
};

export const findHondas = (cars) => {
  let carsArray = []; 
  for (let i = 0; i<cars.length; i++){
    let carValues = Object.values(cars[i]);
    for (let j=0; j<3; j++){ 
      if (carValues[j] === "Honda"){
       carsArray.push(cars[i]);
    }
  }

  }
  return carsArray;
  
};

export const averageAge = (people) => {
  let ages = [];
  for (let i=0; i<people.length; i++){
    ages.push(people[i].age);
  }
  let average = (ages[0] + ages[1] + ages[2])/3;
  return average; 
};

export const createTalkingPerson = (name, age) => {
  const  person = {
    name: name,
    age: age,
    introduce: function(friend){
      return("Hi " + friend + ", my name is " + name + " and I am " + age + "!");
    }
  }
  return person;
};
