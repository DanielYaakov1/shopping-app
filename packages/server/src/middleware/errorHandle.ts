import { NextFunction, Request, Response } from 'express';

interface IError {
  status: number;
  message: string;
  stack: any;
}

async function errorHandleMiddleware(error: IError, request: Request, res: Response, next: NextFunction) {
  const status = error.status || 500;
  try {
    const errorMessage = error.message || 'Something went wrong';
    const errorStack = error.stack;

    let resBody = {
      status: status,
      message: errorMessage,
      stack: errorStack,
    };
    res.status(status).send(resBody);
  } catch (err) {
    res.status(status).send(err);
  }
}

export default errorHandleMiddleware;
