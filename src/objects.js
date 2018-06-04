const createPerson = (name, age) => {
    const user = {
        name: (name),
        age: (age)
    }
    return user
};

const getName = (object) => {
    return object.name
        // your code here
};

const getProperty = (property, object) => {
    return object[property]
        // your code here
};

const hasProperty = (property, object) => {
    const a = object.hasOwnProperty('property')
    return a
};

const isOver65 = (person) => {
    if (person.age > 65) {
        return true
    } else {
        return false
    }
};

const getAges = (people) => {
    return people.map(obj => obj.age)
        // your code here
};

const findByName = (name, people) => {
    return people.splice(obj => obj.name = name).filter(obj => obj.name === name).reduce((obj, item) => {
            obj[people.name] = name
        })
        // your code here
};

const findHondas = (cars) => {
    /* const arrayTooObject = (array, keyField) =>
         cars.reduce((obj, item) => {
             obj[item[keyField]] = item
             return obj
         }, {})
     const a = arrayTooObject(cars, 'manufacturer')
         //const b = Object.entries(a.Honda)
     return a.Honda */


};

const averageAge = (people) => {
    return people.filter(obj => people.age === age)
};

const createTalkingPerson = (name, age) => {
    const user = {
        name: name,
        age: age,
        Introduce: () => `Hello my name is ${name} and I am ${age} years old`
    }
    return user
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
}