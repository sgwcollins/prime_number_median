import { getPrimes, isPrime, medianElems } from '../utils.helper';

describe('primeNumbers Utils', () => {
  describe('isPrime', () => {
    it('It should return true for a given prime number', () => {
      expect(isPrime(5)).toBe(true);
    });

    it('It should return false for a given non prime number', () => {
      expect(isPrime(9)).toBe(false);
    });

    it('It should return false for a value less than 2', () => {
      expect(isPrime(1)).toBe(false);
      expect(isPrime(0)).toBe(false);
      expect(isPrime(-5)).toBe(false);
    });
  });

});

describe('medianElems', () => {
    it('It should return single median value for odd number of values [Sorted]', () => {
      expect(medianElems([2, 3, 5, 7, 11])).toEqual([5]);
    });

  
    it('It should return two median values for even number of values [Sorted]', () => {
      expect(
        medianElems([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37])
      ).toEqual([13, 17]);
    });
  
 
  });

  describe('getPrimes', () => {
    it('It should return list of primes between 2 and 11', () => {
      expect(getPrimes(11)).toEqual([2, 3, 5, 7, 11]);
    });

    it('It should throw error if the second value is less than 2', () => {
      expect(() => getPrimes(-10)).toThrow(
        'There are no prime numbers less than 2'
      );
    });
  });
  
