import { Response, NextFunction, Request } from 'express';

interface IError {
  status: number;
  message: string;
  stack: string;
  code: string;
}

const errorHandleMiddleware = async (
  error: IError,
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars
  next: NextFunction
): Promise<void> => {
  try {
    const status = error.status || 500;
    const errorMessage = error.message || error.code || 'Something went wrong';
    const errorStack = error.stack;

    const resBody = {
      status: status,
      message: errorMessage,
      stack: errorStack,
    };
    res.status(status).send(resBody);
  } catch (err) {
    res.status(500).send(err);
  }
};

export default errorHandleMiddleware;
