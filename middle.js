
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

module.exports = middle;

      
    
          