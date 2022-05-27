const {
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
} = require('../objects');

describe('createPerson', () => {
  it('creates an object with the given name and age properties', () => {
    expect(createPerson('Fred', 79)).toEqual({
      name: 'Fred',
      age: 79
    });

    expect(createPerson('Dilys', 50)).toEqual({
      name: 'Dilys',
      age: 50
    });
  });
});

describe('getName', () => {
  it('returns the name property of the object', () => {
    expect(
      getName({
        name: 'Fred',
        age: 79
      })
    ).toEqual('Fred');
    expect(
      getName({
        name: 'Bob',
        age: 79
      })
    ).toEqual('Bob');
  });
});

describe('getProperty', () => {
  it('returns the given property', () => {
    expect(
      getProperty('age', {
        name: 'Fred',
        age: 79
      })
    ).toEqual(79);
    expect(
      getProperty('name', {
        name: 'Fred',
        age: 79
      })
    ).toEqual('Fred');
  });
});

describe('hasProperty', () => {
  const fred = {
    name: 'Fred',
    age: 79
  };

  const tom = {
    name: 'Tom',
    age: 23
  };

  it('returns true if the object has the given property', () => {
    expect(hasProperty('age', fred)).toBe(true);
    expect(hasProperty('name', tom)).toBe(true);
    expect(hasProperty('favouriteColour', fred)).toBe(false);
    expect(hasProperty('arms', tom)).toBe(false);
  });
});

describe('isOver65', () => {
  it('returns true if the person is aged over 65', () => {
    const jim = {
      name: 'Jim',
      age: 66
    };

    const dilys = {
      name: 'Dilys',
      age: 50
    };

    const marjorie = {
      name: 'Marjorie',
      age: 65
    };

    expect(isOver65(jim)).toBe(true);
    expect(isOver65(dilys)).toBe(false);
    expect(isOver65(marjorie)).toBe(false);
  });
});

describe('getAges', () => {
  it('returns the ages of each person in the array', () => {
    const jim = {
      name: 'Jim',
      age: 66
    };

    const dilys = {
      name: 'Dilys',
      age: 50
    };

    const marjorie = {
      name: 'Marjorie',
      age: 65
    };

    expect(getAges([jim, dilys, marjorie])).toEqual([66, 50, 65]);
    expect(getAges([dilys, marjorie])).toEqual([50, 65]);
    expect(getAges([jim, marjorie])).toEqual([66, 65]);
  });
});

describe('findByName', () => {
  xit('returns the person with the given name', () => {
    const jim = {
      name: 'Jim',
      age: 66
    };

    const dilys = {
      name: 'Dilys',
      age: 50
    };

    const marjorie = {
      name: 'Marjorie',
      age: 65
    };

    expect(findByName('Jim', [jim, dilys, marjorie])).toBe(jim);
    expect(findByName('Marjorie', [jim, dilys, marjorie])).toBe(marjorie);
  });
});

describe('findHondas', () => {
  xit('returns a list of cars manufactured by Honda', () => {
    const car1 = {
      manufacturer: 'Honda',
      year: 1997,
      colour: 'blue'
    };

    const car2 = {
      manufacturer: 'Fiat',
      year: 2010,
      colour: 'green'
    };

    const car3 = {
      manufacturer: 'Toyota',
      year: 2017,
      colour: 'blue'
    };

    const car4 = {
      manufacturer: 'Honda',
      year: 2001,
      colour: 'red'
    };

    expect(findHondas([car1, car2, car3, car4])).toEqual([car1, car4]);
    expect(findHondas([car1, car2, car3])).toEqual([car1]);
    expect(findHondas([car2, car3])).toEqual([]);
  });
});

describe('averageAge', () => {
  xit('returns the average age of the people in the list', () => {
    const john = {
      name: 'John',
      age: 60
    };

    const eric = {
      name: 'Eric',
      age: 50
    };

    const gary = {
      name: 'Gary',
      age: 25
    };

    const james = {
      name: 'James',
      age: 10
    };

    expect(averageAge([john, eric, gary])).toBe(45);
    expect(averageAge([john, eric])).toBe(55);
    expect(averageAge([james, eric])).toBe(30);
  });
});

describe('createTalkingPerson', () => {
  xit('returns a person who can introduce themselves', () => {
    const bill = createTalkingPerson('Bill', 40);
    const catherine = createTalkingPerson('Catherine', 21);
    expect(bill).toEqual({
      name: 'Bill',
      age: 40,
      introduce: expect.any(Function)
    });
    expect(catherine).toEqual({
      name: 'Catherine',
      age: 21,
      introduce: expect.any(Function)
    });

    expect(bill.introduce('Fred')).toEqual(
      'Hi Fred, my name is Bill and I am 40!'
    );
    expect(bill.introduce('Penny')).toEqual(
      'Hi Penny, my name is Bill and I am 40!'
    );

    expect(catherine.introduce('Zoe')).toEqual(
      'Hi Zoe, my name is Catherine and I am 21!'
    );
    expect(catherine.introduce('Bob')).toEqual(
      'Hi Bob, my name is Catherine and I am 21!'
    );
  });
});
