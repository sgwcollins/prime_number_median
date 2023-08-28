import * as express from "express";
const router = express.Router();


import { primeReqValidation } from "../validator/validate_prime_request";
import { getMedianOfPrimes } from "../controller/prime.controller";

router.get("/prime", primeReqValidation, (req: express.Request, res: express.Response) =>
  res.json(getMedianOfPrimes(Number(req.query.maxNumber)))
);

export default router;
