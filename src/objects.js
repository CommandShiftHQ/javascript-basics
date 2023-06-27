const createPerson = (name, age) =>{
 
  return {"name":name,
          "age" : age,}
  
  }
        
  
  const getName = object => {
    return object.name
  
  };
  
  const getProperty = (property, object) => {
    const newojb = object
    return newojb[property]
  
  };
  
  const hasProperty = (property, object) => {
    return property in object
    
  };
  
  const isOver65 = person => {
   
    if(person.age>65){
      return true;
    }else{
      return false;
    }
  }
  
  
  const getAges = people => {
    const newAges = people.map((person)=>{
      return person.age;
    })
    return newAges
  };
  
  const findByName = (name, people) => {
    return people.find((person)=>{
      return (person.name===name)
    })
  
  }
  
  
  const findHondas = cars => {
    return cars.filter((car)=>{
      if(car.manufacturer==="Honda"){
        return car;
      }
  
    })
  
  
  };
  
  const averageAge = people => {
    let agesNew= people.map((person)=>{
        return person.age
    })
    let newAge2= agesNew.reduce((acc,curr)=>{
      return  acc+curr
  },0)
    return newAge2/(people.length)
  }
  
    
   
  
  
  const createTalkingPerson = (name, age) => {
    return {
      name:name,
      age:age,
      introduce: function (newName) {
        return `Hi ${newName}, my name is ${name} and I am ${age}!`
      },
    }
    
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
  

