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
  const car = [];
  for (let index = 0; index < cars.length; index++){
  car.push(car.manufacturer)
}
  return car
  /*cars.sort(function(){ 
*/
/*let car = [honda]
return car*/
};

const averageAge = people => {
 /* let avg = [john, eric, gary];
  return (getAverageAge(avg));*/
};

const createTalkingPerson = (name, age) => {
 /* const bill = {
    name: 'Bill',
    age: 40,
    intro: "Hi Fred, my name is Bill and I am 40!"
  }
  return bill.name.age.intro*/
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
