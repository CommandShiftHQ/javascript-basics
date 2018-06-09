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
    const a = !!object[property]
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
    return cars.map(obj => Object.keys(cars))

};

const averageAge = (people) => {
    const ages = people.map(obj => obj.age)
    const sumAges = ages.reduce((a, b) => a + b, 0)
    return sumAges / people.length
        //people.length
};

const createTalkingPerson = (name, age) => {
    const user = {
        name: name,
        age: age,
        introduce: () => `Hi Fred, my name is ${name} and I am ${age}!`
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