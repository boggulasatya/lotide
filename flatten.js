  const assertArraysEqual = require('./assertArraysEqual');

  // create flatten function, takes an array contains elements & nested array & return flattened version of array
 const flatten = function(arr1){
  let output = [];                           
    for( let i = 0; i < arr1.length; i++){
      if (Array.isArray(arr1[i])) {       
        const nestedArr = flatten(arr1[i]);    
        output = output.concat(nestedArr);  
      }else{
        output.push(arr1[i]);
      }
    }
return output;
 };

 module.exports = flatten;