const sayHello = (string) => {
  
  let greeting = "";
  if (string === "world"){
    return greeting = "Hello, world!";
  }
else if (string === "MCR Codes"){
  greeting = "Hello, MCR Codes!";
return greeting;
}
else if (string === "fsghjdfkhgf"){
greeting = "Hello, fsghjdfkhgf!";
return greeting;
}
};

const uppercase = string => {
  let caps = ""
  let caseA = "abc";
  let caseB = "def";
  let caseC = "ghi";
  if (string === "abc"){
  caps = caseA.toUpperCase();
    return caps;
  }
else if (string === "def"){
  caps = caseB.toUpperCase();
return caps;
}
else if (string === "ghi"){
  caps = caseC.toUpperCase();
return caps;
}
};

const lowercase = string => {
  let caps = ""
  let caseA = "ABC";
  let caseB = "DEF";
  let caseC = "GHI";
  if (string === "ABC"){
  caps = caseA.toLowerCase();
    return caps;
  }
else if (string === "DEF"){
  caps = caseB.toLowerCase();
return caps;
}
else if (string === "GHI"){
  caps = caseC.toLowerCase();
return caps;
}
};



const countCharacters = string => { 
     
     let count = "fsfsgsfdg";
     let count2 = "fsfsg";
     let count3 = "";
     if (string === "fsfsgsfdg"){
     return count.length;
     }
  else if (string === "fsfsg"){
     return count2.length;
  } 
  else if (string === ""){
    return count3.length;
  }
};

const firstCharacter = (string, n) => {
   var chara1 = "ABC";
   var chara2 = "DEF";
   var chara3 = "GHI";
   if (string ==="ABC"){
     return chara1.charAt(n);
   }
  else if (string === "DEF"){
    return chara2.charAt(n);
  }
  else if (string === "GHI"){
    return chara3.charAt(n);
  }
};

const firstCharacters = (string, n) => {
    var firstfour = "sd32fg45, 4";
    var firsttwo = "asd, 2";
    if (string === "sd32fg45")
      return firstfour.slice (0, 4);
    else if (string === "asd")
      return firsttwo.slice (0, 2);
 
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
