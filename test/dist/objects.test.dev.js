"use strict";

var _require = require("../src/objects"),
    createPerson = _require.createPerson,
    getName = _require.getName,
    getProperty = _require.getProperty,
    hasProperty = _require.hasProperty,
    isOver65 = _require.isOver65,
    getAges = _require.getAges,
    findByName = _require.findByName,
    findHondas = _require.findHondas,
    averageAge = _require.averageAge,
    createTalkingPerson = _require.createTalkingPerson;

describe("createPerson", function () {
  xit("creates an object with the given name and age properties", function () {
    expect(createPerson("Fred", 79)).toEqual({
      name: "Fred",
      age: 79
    });
    expect(createPerson("Dilys", 50)).toEqual({
      name: "Dilys",
      age: 50
    });
  });
});
describe("getName", function () {
  xit("returns the name property of the object", function () {
    expect(getName({
      name: "Fred",
      age: 79
    })).toEqual("Fred");
  });
});
describe("getProperty", function () {
  xit("returns the given property", function () {
    expect(getProperty("age", {
      name: "Fred",
      age: 79
    })).toEqual(79);
  });
});
describe("hasProperty", function () {
  var fred = {
    name: "Fred",
    age: 79
  };
  it("returns true if the object has the given property", function () {
    expect(hasProperty("age", fred)).toBe(true);
    expect(hasProperty("favouriteColour", fred)).toBe(false);
  });
});
describe("isOver65", function () {
  xit("returns true if the person is aged over 65", function () {
    var jim = {
      name: "Jim",
      age: 66
    };
    var dilys = {
      name: "Dilys",
      age: 50
    };
    var marjorie = {
      name: "Marjorie",
      age: 65
    };
    expect(isOver65(jim)).toBe(true);
    expect(isOver65(dilys)).toBe(false);
    expect(isOver65(marjorie)).toBe(false);
  });
});
describe("getAges", function () {
  xit("returns the ages of each person in the array", function () {
    var jim = {
      name: "Jim",
      age: 66
    };
    var dilys = {
      name: "Dilys",
      age: 50
    };
    var marjorie = {
      name: "Marjorie",
      age: 65
    };
    expect(getAges([jim, dilys, marjorie])).toEqual([66, 50, 65]);
  });
});
describe("findByName", function () {
  it.only("returns the person with the given name", function () {
    var jim = {
      name: "Jim",
      age: 66
    };
    var dilys = {
      name: "Dilys",
      age: 50
    };
    var marjorie = {
      name: "Marjorie",
      age: 65
    };
    expect(findByName("Jim", [jim, dilys, marjorie])).toBe(jim);
    expect(findByName("Marjorie", [jim, dilys, marjorie])).toBe(marjorie);
  });
});
describe("findHondas", function () {
  xit("returns a list of cars manufactured by Honda", function () {
    var car1 = {
      manufacturer: "Honda",
      year: 1997,
      colour: "blue"
    };
    var car2 = {
      manufacturer: "Fiat",
      year: 2010,
      colour: "green"
    };
    var car3 = {
      manufacturer: "Toyota",
      year: 2017,
      colour: "blue"
    };
    var car4 = {
      manufacturer: "Honda",
      year: 2001,
      colour: "red"
    };
    expect(findHondas([car1, car2, car3, car4])).toEqual([car1, car4]);
  });
});
describe("averageAge", function () {
  xit("returns the average age of the people in the list", function () {
    var john = {
      name: "John",
      age: 60
    };
    var eric = {
      name: "Eric",
      age: 50
    };
    var gary = {
      name: "Gary",
      age: 25
    };
    expect(averageAge([john, eric, gary])).toBe(45);
  });
});
describe("createTalkingPerson", function () {
  xit("returns a person who can introduce themselves", function () {
    var bill = createTalkingPerson("Bill", 40);
    expect(bill).toEqual({
      name: "Bill",
      age: 40,
      introduce: expect.any(Function)
    });
    expect(bill.introduce("Fred")).toEqual("Hi Fred, my name is Bill and I am 40!");
  });
});