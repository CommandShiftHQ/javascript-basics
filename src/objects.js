export const createPerson = (name, age) => {
  return {
    name: name,
    age: age
  }
};
/*
'creates an object with the given name and age properties'
    expect(createPerson('Fred', 79)).toEqual
      name: 'Fred',
      age: 79,
    expect(createPerson('Dilys', 50)).toEqual
      name: 'Dilys',
      age: 50,
*/

export const getName = (object) => {
  return object.name
};
/*
'returns the name property of the object'
    expect(getName)
      name: 'Fred',
      age: 79,
    toEqual('Fred')
*/

export const getProperty = (property, object) => {
  return object[property]
};
/*
'returns the given property'
    expect(getProperty('age'))
      name: 'Fred',
      age: 79,
    toEqual(79)
*/

export const hasProperty = (property, object) => {
  return object ? hasOwnProperty.call(object, property) : false
};
// https://stackoverflow.com/questions/135448/how-do-i-check-if-an-object-has-a-property-in-javascript
/*
describe('hasProperty', () => {
  const fred = {
    name: 'Fred',
    age: 79,
  };
  expect(hasProperty('age', fred)).toBe(true);
  expect(hasProperty('favouriteColour', fred)).toBe(false);
*/

export const isOver65 = (person) => {
  if (person.age > 65) {
    return true
  }
  else return false
};
/*
describe('isOver65', () => {
  it('returns true if the person is aged over 65', () => {
    const jim = {
      name: 'Jim',
      age: 66,
    };
    const dilys = {
      name: 'Dilys',
      age: 50,
    };
    const marjorie = {
      name: 'Marjorie',
      age: 65,
    };
    expect(isOver65(jim)).toBe(true);
    expect(isOver65(dilys)).toBe(false);
    expect(isOver65(marjorie)).toBe(false);
*/

export const getAges = (people) => {
  let newArray = []  
  for (let n = 0; n < people.length; n++) {
    newArray[n] = people[n].age
    }
  return newArray
};
/*
  it('returns the ages of each person in the array', () => {
    const jim = {
      name: 'Jim',
      age: 66,
    };
    const dilys = {
      name: 'Dilys',
      age: 50,
    };
    const marjorie = {
      name: 'Marjorie',
      age: 65,
    };
    expect(getAges([jim, dilys, marjorie])).toEqual([66, 50, 65]);
*/

export const findByName = (name, people) => {
  for (let n = 0; n < people.length; n++) {
    if (people[n].name === name) {
	return people[n]
    }
  }
};
/*
  it('returns the person with the given name', () => {
    const jim = {
      name: 'Jim',
      age: 66,    
    };
    const dilys = {
      name: 'Dilys',
      age: 50,
    };
    const marjorie = {
      name: 'Marjorie',
      age: 65,
    };
    expect(findByName('Jim', [jim, dilys, marjorie])).toBe(jim);
    expect(findByName('Marjorie', [jim, dilys, marjorie])).toBe(marjorie);
*/

export const findHondas = (cars) => {
  let newArray = []
  for (let n = 0; n < cars.length; n++) {
    if (cars[n].manufacturer === 'Honda') {
      newArray.push(cars[n])
      // push() method adds elements to the end of an array and returns the new length of the array.
      }
    }
    return newArray
};
/*
  it('returns a list of cars manufactured by Honda', () => {
    const car1 = {
      manufacturer: 'Honda',
      year: 1997,
      colour: 'blue',
    };
    const car2 = {
      manufacturer: 'Fiat',
      year: 2010,
      colour: 'green',
    };
    const car3 = {
      manufacturer: 'Toyota',
      year: 2017,
      colour: 'blue',
    };
    const car4 = {
      manufacturer: 'Honda',
      year: 2001,
      colour: 'red',
    };
    expect(findHondas([car1, car2, car3, car4])).toEqual([car1, car4]);
*/

export const averageAge = (people) => {
  let count = 0, total = 0
    for (let n in people) {
      total = total + people[n].age
      count++;
    }
return total/count;
};
// https://stackoverflow.com/questions/25930547/calculating-the-average-of-object-properties-in-array
/*
  it('returns the average age of the people in the list', () => {
    const john = {
      name: 'John',
      age: 60,
    };
    const eric = {
      name: 'Eric',
      age: 50,
    };
    const gary = {
      name: 'Gary',
      age: 25,
    };
    expect(averageAge([john, eric, gary])).toBe(45);
*/

export const createTalkingPerson = (name, age) => {
  let person = {
    name: name, 
    age: age
  }
  person.introduce = function(thatGuy) {
    return 'Hi ' + thatGuy + ', my name is ' + name + ' and I am ' + age + '!'
    } 
  return person
};
/*
  it('returns a person who can introduce themselves', () => {
    const bill = createTalkingPerson('Bill', 40);
    expect(bill).toEqual({
      name: 'Bill',
      age: 40,
      introduce: expect.any(Function),
    });
    expect(bill.introduce('Fred')).toEqual('Hi Fred, my name is Bill and I am 40!');
*/
