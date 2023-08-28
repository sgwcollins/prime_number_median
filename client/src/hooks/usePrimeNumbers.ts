import { useQuery } from "react-query";
import createRequest from "../constants/createRequest";
import { API_GET_prime } from "../constants/requestOptions";

const fetchNumber = async (number: number | undefined) => {
  if (!number) return null;

  try {
    const response = await createRequest(API_GET_prime(number));
    return response.data;
  } catch (error) {
    // throw new Error(error?.response?.data.message);
  }
};

const usePrimeNumbers = (number: number | undefined) =>
  useQuery(["maxNumbers", number], () => fetchNumber(number), {
    enabled: number ? true : false,   
  });

export { usePrimeNumbers, fetchNumber };
