'use strict';

var assert = require('assert');

var sort = require('./');

describe('quick-sort', function() {
  it('should work with empty arrays', function() {
    assert.deepEqual(sort([]), []);
  });

  it('should work with ascending sorted arrays', function() {
    assert.deepEqual(sort([3, 1, 4, 1, 5, 9, 2, 6, 5, 4]), [1, 1, 2, 3, 4, 4, 5, 5, 6, 9]);
    assert.deepEqual(sort([9, 2, 8, 6, 1, 3]), [1, 2, 3, 6, 8, 9]);
    assert.deepEqual(sort([5, 2, 2, 6, 1, 3]), [1, 2, 2, 3, 5, 6]);
    assert.deepEqual(sort([5, 2, 4, 6, 1, 3]), [1, 2, 3, 4, 5, 6]);
    assert.deepEqual(sort([0, 0, 0, 0, 0, -1]), [-1, 0, 0, 0, 0, 0]);
  });

  it('should work with random non-sorted arrays', function() {
    function makeRandomArray() {
      var precision = 0;
      var multiplier = 100;
      var size = 100;
      var result = [];
      for (var i = size; i > 0; i--) {
        result.push(parseFloat((Math.random() * multiplier).toFixed(precision)));
      }
      return result;
    }
    var array = makeRandomArray();
    sort(array);
    for (var i = 0; i < array.length - 1; i++) {
      assert((array[i] <= array[i + 1]) === true);
    }
  });
});
