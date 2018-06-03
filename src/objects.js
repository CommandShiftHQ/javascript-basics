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
    if (property in object) {
        return true
    } else {
        return false
    }
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
    return cars
};

const averageAge = (people) => {
    return people
};

const createTalkingPerson = (name, age) => {

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