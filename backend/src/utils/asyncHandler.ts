import { Request, Response, NextFunction, RequestHandler } from 'express';
import { ApiError } from './ApiError';

type AsyncRequestHandler = (
  req: Request, 
  res: Response, 
  next: NextFunction
) => Promise<any>;

const asyncHandler = (requestHandler: AsyncRequestHandler): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(requestHandler(req, res, next))
            .catch((err: ApiError) => next(err));
    };
};

export { asyncHandler };