import dotenv from 'dotenv';
import express, { Express } from 'express';
import cors from 'cors';
import setupMiddleware from './middleware';
import primeRouter  from './routes/prime.routes'


dotenv.config();

const app: express.Express = express(); // defining the Express app

app.use(express.json()); // to parse JSON bodies into JS objects
app.use(cors()); // enabling CORS for all requests

const hostname = process.env.HOSTNAME || "127.0.0.1";
const port = process.env.PORT || 8000;

setupMiddleware(app);

app.use('/', [primeRouter]);

const server = app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

export default server;
