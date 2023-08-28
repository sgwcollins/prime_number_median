
interface serverConfigType  {
    [key: string]: {
        BASE_URL: string;
    }
}

export const  serverConfig:serverConfigType = {
    localhost: {
      BASE_URL: 'http://localhost:8000/',
    },
    sandbox: {
      BASE_URL: 'https://prime-endpoint.onrender.com/',
    },
 
  };
  
