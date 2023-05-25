const eqArrays = function(a1, a2) {
  if (!Array.isArray(a1) || !Array.isArray(a2)) {
    return false;
  } else if (a1.length !== a2.length) {
    return false;
  }

  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) {
      return false;
    }
  }
  return true;
};
  



const assertArraysEqual = function(b1, b2) {
  
  if (eqArrays(b1, b2)) {
    console.log("Assertion Passed: Arrays are equal");
    return true;
  } else {
    console.log("Assertion Failed: Arrays are not equal");
    return false;
  }
};
const middle = function(array) {
  let output = [];
  if (array.length <= 2) {
    return output;
  }
  const middleElm = Math.floor(array.length / 2);
  if (array.length % 2 === 1) {
    output.push(array[middleElm]);
  } else {
    output.push(array[middleElm - 1]);
    output.push(array[middleElm]);
        

  }
  return output;
};
console.log(middle([1]));// => []
console.log(middle([1, 2]));// => []
console.log(middle([1, 2, 3]));
console.log(middle([1, 3, 5, 6]));
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([6, 7, 3]), [7]);
      
    
          