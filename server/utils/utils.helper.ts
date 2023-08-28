//determine if number is a prime number
export const isPrime = (num: number): boolean => {
  let isPrime = true;
  if (num < 2) isPrime = false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
};

/**
 * Returns an array of prime numbers within the specified range.
 * 
 * @param end - The upper boundary of the range (inclusive).
 * @param start - The lower boundary of the range (default is 2).
 * @throws Will throw an error if end is less than 2.
 * @returns An array of prime numbers from start to end.
 */
export const getPrimes = (end: number, start = 2) => {
  // Check if the end value is less than 2. If so, throw an error since there are no prime numbers less than 2.
  if (end < 2) throw new Error("There are no prime numbers less than 2");

  // Create an array of boolean values initialized as `true` with length `end + 1`. 
  // Each index in this array represents a number and the value indicates if it's prime (true) or not (false).
  const primeBoolArr = Array.from({ length: end + 1 }, () => true);
  // Explicitly set the values for 0 and 1 as `false` since they are not prime numbers.
  primeBoolArr[0] = primeBoolArr[1] = false;

  // Use the Sieve of Eratosthenes algorithm to identify prime numbers:
  for (let i = 2; i <= Math.floor(Math.sqrt(end)); i++) {
    // If `i` is prime (hasn't been marked as false), then mark all its multiples as non-prime (set to false).
    if (primeBoolArr[i]) {
      for (let j = i + i; j <= end; j += i) {
        primeBoolArr[j] = false;
      }
    }
  }

  // Transform the boolean array into an array of prime numbers using the reduce function.
  const primeNumbers = primeBoolArr.reduce<number[]>(
    (result, element, index) =>
      // If the current element is `true` (i.e., it's prime), then push the corresponding number (index) to the result array.
      element ? (result.push(index), result) : result,
    []
  );

  // Filter the array to only include prime numbers within the range [start, end].
  return primeNumbers.filter(prime => prime >= start);
};
export const medianElems = (elems: number[]): number[] => {
    const mid = Math.floor(elems.length / 2);

    return elems.length % 2 !== 0
      ? [elems[mid]]
      : [elems[mid - 1], elems[mid]];
  };
  
