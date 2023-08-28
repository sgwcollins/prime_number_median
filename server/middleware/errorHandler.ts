import * as express from 'express';

export const errorLogger: express.ErrorRequestHandler = (err, req, res, next) => {
  console.log(`[Error] ${err.status || 500}: ${err.message}`);
  next(err);
};

/* eslint-disable @typescript-eslint/no-unused-vars */
export const errorResponder: express.ErrorRequestHandler = (err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMsg = err.message || 'Something went wrong';
  res.status(errStatus).json({
    success: false,
    error: {
      status: errStatus,
      message: errMsg,
      stack: err.stack,
    },
  });
};
