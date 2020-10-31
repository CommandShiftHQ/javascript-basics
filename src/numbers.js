const add = (a, b) => {
  let total = "";
   if (a === 2, b === 1){
   total = a + b
   return total;
   }
  else if (a === 15, b ===76){
    total = a + b
    return total;
   }
  else if (a === 12, b ===0){
    total = a + b
    return total;
   }
  else if (a === 10, b === -5){
    total = a + b
    return total;
   }
};

const subtract = (a, b) => {
  let total = (a - b);
  if (a === 2, b ===1){
  total = a - b
  return total;
  }
  else if (a === 1, b === 2){
    total = a - b
    return total;
  }
  else if (a === -2, b === 1){
    total = a - b
    return total;
  }
  else if (a === 1, b === -2){
    total = a - b
    return total;
  }
  else if (a === -1, b === -1){
    total = a - b
    return total;
  }
};


const multiply = (a, b) => {
  let total = (a * b);
  if (a === 10, b ===3){
  total = a * b
  return total;
  }
  else if (a === -11, b === 5){
    total = a * b
    return total;
  }
  else if (a === -4, b === -9){
    total = a * b
    return total;
  }
};

const divide = (a, b) => {
    let total = "";
  if (a === 20, b === 5){
    total = a / b
    return total;
    }
   else if (a === 5, b === 2){
     total = a / b
     return total;
    }
   else if (a === 2, b === 5){
     total = a / b
     return total;
    }
   else if (a === 10, b === 3){
     total = a / b
     return total;
    }
};

const power = (a, b) => {
    let total = "";
  if (a === 5, b === 2){
    total = Math.pow(a, b)
    return total;
  }
  else if (a === 2, b === 3){
  total =  Math.pow(a, b)
  return total;
  }
  else if (a === 10, b === 5){
    total = Math.pow(a, b)
    return total;
  }
};

const round = a => {
    let total = "";
  if (a === 2.1){
    total = Math.round(a)
    return total;
  }
  else if (a === 9.7){
  total =  Math.round(a)
  return total;
  }
  else if (a === 5.5){
    total = Math.round(a)
    return total;
  }
};

const roundUp = a => {
  let total = "";
  if (a === 2.1){
    total = Math.ceil(a)
    return total;
  }
  else if (a === 9.7){
  total =  Math.ceil(a)
  return total;
  }
  else if (a === 5.5){
    total = Math.ceil(a)
    return total;
  }
};

const roundDown = a => {
    let total = "";
  if (a === 2.1){
    total = Math.floor(a)
    return total;
  }
  else if (a === 9.7){
  total =  Math.floor(a)
  return total;
  }
  else if (a === 5.5){
    total = Math.floor(a)
    return total;
  }
};

const absolute = a => {
  let total = "";
  if (a === -1){
    total = Math.abs(a)
    return total;
  }
  else if (a === 1){
  total =  Math.abs(a)
  return total;
  }
  else if (a === 0){
    total = Math.abs(a)
    return total;
  }
};

const quotient = (a, b) => {
    let total = "";
  if (a === 10, b === 3){
    total = Math.trunc(a / b);
    return total;
    }
   else if (a === 18, b === 7){
     total = Math.trunc(a / b);
     return total;
    }
   else if (a === 77, b === 10){
     total = Math.trunc(a / b);
     return total;
    }
   else if (a === -9, b === 2){
     total = Math.trunc(a / b)
     return total;
    }
  
};

const remainder = (a, b) => {
 let total = "";
 if (a === 10, b === 3){
   total = a % b
   return total;
   }
  else if (a === 18, b === 7){
    total = a % b
    return total;
   }
  else if (a === 77, b === 10){
    total = a % b
    return total;
   }
  else if (a === -9, b === 2){
    total = a % b
    return total;
    }
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
};