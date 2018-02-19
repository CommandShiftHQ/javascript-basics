export const createPerson = (name, age) => {
  return {
    name : name,
    age : age,
    
}
};

export const getName = (object) => {
  return object.name
};

export const getProperty = (property, object) => {
  return object[property]
};

export const hasProperty = (property, object) => {

if(object[property]) {
  return true
}
  else {
    return false
}
};

export const isOver65 = (person) => {
  if(person.age > 65) {
return true
}
else {
return false
}
};

export const getAges = (people) => {
let agesArr = []  
for (let i = 0; i < people.length; i++ )
 {

	agesArr.push(people[i].age)

 }

	return agesArr
};

export const findByName = (name, people) => {
  
for (let i = 0; i < people.length; i++ )
 {
   if(people[i].name === name) {

	return people[i]
	break
 
   }
 }
};

export const findHondas = (cars) => {
  let carsArr = []

for (let i = 0; i < cars.length; i++ )
 {
   if(cars[i].manufacturer === 'Honda') {

	carsArr.push(cars[i])
 
   }
 }

return carsArr
};

export const averageAge = (people) => {

let agesArr = []
	for (let i = 0; i < people.length; i++ )
 {
   agesArr.push(people[i].age)
 
   }
let averageAge = 0

    averageAge += agesArr.reduce((a, b) => a + b)
    / agesArr.length;

return averageAge

};

export const createTalkingPerson = (name, age) => {
  return `Hi Fred, my name is $name and I am $age!` 
};
