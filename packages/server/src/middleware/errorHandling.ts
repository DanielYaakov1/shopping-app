import { NextFunction, Request, Response } from 'express';

interface IError {
  status: number;
  message: string;
  stack: any;
}

async function errorHandling(error: IError, request: Request, res: Response, next: NextFunction) {
  const status = error.status || 500;
  const errorMessage = error.message || 'Something went wrong';
  const errorStack = error.stack;

  let resBody = {
    status: status,
    message: errorMessage,
    stack: errorStack,
  };
  try {
    res.status(status).json(resBody);
  } catch (err) {
    res.status(status);
    res.json(err);
  }
}

export default errorHandling;
