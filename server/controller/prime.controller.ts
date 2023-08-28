import { getPrimes, medianElems } from "../utils/utils.helper";

export interface Output {
  primeNumbers: number[];
  median: number[];
}

export const getMedianOfPrimes = (number: number): Output => {
  const primeNumbers = getPrimes(number);
  const median = medianElems(primeNumbers);
  return {
    primeNumbers,
    median,
  };
};
