const chai = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

const { expect } = chai;

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('should return 4 when inputs are 1 and 3', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('should return 5 when inputs are 1 and 3.7', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });

    it('should return 5 when inputs are 1.2 and 3.7', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });

    it('should return 6 when inputs are 1.5 and 3.7', () => {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });
  });

  describe('sUBTRACT', () => {
    it('should return -2 when inputs are 1 and 3', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });

    it('should return -3 when inputs are 1.2 and 3.7', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    });

    it('should return -2 when inputs are 1.5 and 3.7', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
    });
  });

  describe('dIVIDE', () => {
    it('should return 0.25 when inputs are 1 and 3.7', () => {
      expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
    });

    it('should return "Error" when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 1.5, 0.2)).to.equal('Error');
    });

    it('should return 1 when inputs are 4.5 and 4.5', () => {
      expect(calculateNumber('DIVIDE', 4.5, 4.5)).to.equal(1);
    });
  });

  describe('invalid type', () => {
    it('should throw an error for invalid type', () => {
      expect(() => calculateNumber('MULTIPLY', 1, 3)).to.throw(/Invalid type/);
    });
  });
});
