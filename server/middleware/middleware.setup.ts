import { Express, Request, Response } from 'express';
import { errorLogger, errorResponder } from './errorHandler';


//Middleware for error logging and error handling

export const setupMiddleware = (server: Express) => {

  server.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Touch Bistro API');
  });

  server.use(errorLogger);
  server.use(errorResponder);
};
