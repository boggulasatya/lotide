
const eqArrays = function(a1, a2) {
   if(!Array.isArray(a1) || !Array.isArray(a2)) {
    return false;
   } 
   else if (a1.length !== a2.length) {
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
  /* create flatten function, takes an array contains elements & nested array & return flattened version of array*/
 const flatten = function(arr1){
  let output = [];                           //to store flatened elements//
 //Iteration over each element & verify each element is an array//
    for( let i = 0; i < arr1.length; i++){
      if (Array.isArray(arr1[i])) {       
        const nestedArr = flatten(arr1[i]); //flattened elements stored here//
        output = output.concat(nestedArr);  //
      }else{
        output.push(arr1[i]);
      }
    }
return output;
 };
 module.exports = flatten;
 console.log(flatten([2, 4,[1, 2],5, [6,7]]));
 console.log(flatten([1, 2, [3, 4], 5, [6]]));
 console.log(flatten([1, ['hi']]));