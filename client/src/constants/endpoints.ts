import { serverConfig } from "./serverConfig";

const ENV_NAME = process.env.REACT_APP_ENV_NAME || 'localhost'

export const BASE_URL = serverConfig[ENV_NAME].BASE_URL;

export const PRIME_URL = `${BASE_URL}prime`;