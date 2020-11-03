const createPerson = (name, age) => {
  return {
    name: name,
    age: age
    
  };
};

const getName = object => {
  let name = "Fred";
  return name
};

const getProperty = (property, object) => {
  let age = 79;
  return age
};

const hasProperty = (property, object) => { 
    return object.hasOwnProperty(property);
  };
     
const isOver65 = person => {
 return person.age > 65
  
};
/*-------------------------------------------------
---------------------BREAKTIME---------------------
--------------------------------------------------*/
const getAges = people => {
  const ages = [];
  for (let index = 0; index < people.length; index++){
  ages.push(people[index].age)
}
  return ages
  /*let allAges = people.filter(people.age);{
    return allAges
  }*/
   /* let ages = people.find('age');
    return ages.name */
    //people.find(item => item.age);
};

const findByName = (name, people) => {
let answer = people.find(person => person.name === name);
return answer;

};

const findHondas = cars => {
  
  //for (car of cars) 
  //cars.splice(1,4)
  let hondas = cars.filter(cars => cars.manufacturer === 'Honda')
  //return car
  return hondas
  //----------------------------EXPLANATION------------------------------
  /*cars.filter is saying goto cars var, then move to the manufacturer 
  part of the list and return the objects of the array that contain the 
  information with the name "Honda"*/
  //---------------------------------------------------------------------
  //---------------------IDEAS THAT DID NOT WORK-------------------------
  //console.log(car[index]);
  //cars.find(car => car.manufacturer === cars)
  //for (let index = 0; index < cars.length; index++){
  //let answer = '';
 /* cars.find(car => car.manufacturer === cars.manufacturer)
  return cars*/
}
const averageAge = people => {
  //I need to get values from age
  /*const reducer = (total, currentValue) => total + currentValue.age;
    const sum = people.reduce(reducer);
      console.log (sum / people.length);*/
     
const avg = people.reduce((age, person) => {
    return age + person.age;
  }, 0);
  return avg / people.length;
    //console.log (sum)
  //I need the length off the array
  //Then divide are by length
 /* const total = 0;
  people.age.forEach(age => {
    return total += age*/
 // };
  //for (let avg = 0; avg < people.length; avg++)
  /*  let total = 0;
people.forEach(function (people){
  total += people
  return total / people.length})*/
};


const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: newFriend =>  {
    return `Hi ${newFriend}, my name is ${name} and I am ${age}!`;
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
