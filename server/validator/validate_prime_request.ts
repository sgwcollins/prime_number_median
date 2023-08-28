import { Request, Response, NextFunction, RequestHandler } from "express";
import { validationResult, query } from "express-validator";

const validationErrorHandler: RequestHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array({ onlyFirstError: true }) });
  }
  return next();
};

export const primeReqValidation = [
  query("maxNumber")
    .exists().withMessage('Max Number is required')
    .isNumeric().withMessage('Only Numbers allowed')
    .isInt({ min: 1, max: 1000000 }).withMessage('Provide a number between 1 and 1,000,000'),
  (req: Request, res: Response, next: NextFunction) =>
    validationErrorHandler(req, res, next),
];
