import axios, { AxiosRequestConfig, AxiosResponse } from "axios";


type QueryType = {
    [key: string]: number|string;
};

export interface createRequestOpts {
  url: string;
  method: string;
  query?: QueryType;
}

export default async function createRequest(
  opts: createRequestOpts = {
    url: "",
    method: "",
  }
): Promise<AxiosResponse> {
  const { url, method, query } = opts;
  if (!method) throw new Error("Required parameter method was undefined.");
  if (!url) throw new Error("Required parameter url was undefined.");

  const config: AxiosRequestConfig = {
    url,
    params: query,
    method: method.toLowerCase(),
  };

  return axios.request(config);
}
