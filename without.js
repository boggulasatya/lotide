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
module.exports = without;