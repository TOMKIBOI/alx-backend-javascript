const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('should return 4 when inputs are 1 and 3', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should return 5 when inputs are 1 and 3.7', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });

    it('should return 5 when inputs are 1.2 and 3.7', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('should return 6 when inputs are 1.5 and 3.7', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });
  });

  describe('sUBTRACT', () => {
    it('should return -2 when inputs are 1 and 3', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    });

    it('should return -3 when inputs are 1.2 and 3.7', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    });

    it('should return -2 when inputs are 1.5 and 3.7', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });
  });

  describe('dIVIDE', () => {
    it('should return 0.25 when inputs are 1 and 3.7', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    });

    it('should return "Error" when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 0.2), 'Error');
    });

    it('should return 1 when inputs are 4.5 and 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.5, 4.5), 1);
    });
  });

  describe('invalid type', () => {
    it('should throw an error for invalid type', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 1, 3), /Invalid type/);
    });
  });
});
