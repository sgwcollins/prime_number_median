import { createRequestOpts } from "./createRequest";
import { PRIME_URL } from "./endpoints";

const GET = "GET";

export const API_GET_prime = (number: number): createRequestOpts => ({
  query: {
    maxNumber: number,
  },
  method: GET,
  url: PRIME_URL,
});
