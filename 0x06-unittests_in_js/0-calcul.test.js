const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('checks the output', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1.5, 3), 5);
    assert.strictEqual(calculateNumber(1.4, 3.5), 5);
    assert.strictEqual(calculateNumber(3.7, 3.5), 8);
    assert.strictEqual(calculateNumber(3.7, 3.2), 7);
  });
});
