import { Response } from 'express';

interface IError {
  status: number;
  message: string;
  stack: string;
}

async function errorHandleMiddleware(error: IError | any, res: Response) {
  const status = error.status || 500;
  try {
    const errorMessage = error.message || 'Something went wrong';
    const errorStack = error.stack;

    const resBody = {
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
