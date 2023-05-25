
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

/* take 2 arrays Source & items to remove as parameters for without function & print new array exclude elements from items to remove */

const without = function(sourceA, itemsToRemove){
    let output = [];
    for( let i = 0; i < sourceA.length; i++){
      if (!itemsToRemove.includes(sourceA[i])) {
        output.push(sourceA[i]);
      }
    }
    return output;
};
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); 
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without([1, 2, 3], [1, 2]));
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
