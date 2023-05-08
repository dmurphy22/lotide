const assert = require('chai').assert;
const head = require('../head');

describe("#tail", () => {

  it("returns true when passing [1, 2, 3] and expecting 1  ", () => {
    assert.deepEqual(head([1, 2, 3]), 1);
  });

  it("returns false when passing [1, 2, 3] and expecting 2  ", () => {
    assert.notDeepEqual(head([1, 2, 3]), 2);
  });
});