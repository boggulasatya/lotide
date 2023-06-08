
const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  })
});


/*const output = tail(["Yo Yo"]);
assertEqual(output.length, 0);

const final = tail([]);
assertEqual(final.length, 0);

const result = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");*/ // ensure second element is "Labs"//