export const createPerson = (name, age) => {
  // creates an object with the given name and age properties
  let person = {
    name: name,
    age: age
  };

  return (person);

};

export const getName = (object) => {
  // returns the name property of the object
  return(object["name"]);

};

export const getProperty = (property, object) => {
  return(object[property]);
};

export const hasProperty = (property, object) => {
  // checks whether object has given property
  return object.hasOwnProperty(property);
};

export const isOver65 = (person) => {
  // returns true if the person is aged over 65
  if (person['age'] > 65) {
    return true;
  } else {
    return false;
  }
};

export const getAges = (people) => {
  // returns the ages of each person in the array
  //return people.filter()
};

export const findByName = (name, people) => {
  // your code here
  return people.find(person => person.name === name);
};

export const findHondas = (cars) => {
  // your code here
};

export const averageAge = (people) => {
  // your code here
};

export const createTalkingPerson = (name, age) => {
  // your code here
};
