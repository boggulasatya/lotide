const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
const cityByProvince = {
  ontario: "Ottawa",
  manitoba: "Winnipeg",
  alberta: "Calgary",
  BC: "Victoria"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama");
assertEqual(findKeyByValue(cityByProvince, "Calgary"), "alberta");
assertEqual(findKeyByValue(cityByProvince, "Victoria"), "manitoba");