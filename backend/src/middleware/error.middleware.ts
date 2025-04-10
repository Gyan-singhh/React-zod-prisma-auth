import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/ApiError";

function errorHandler(
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message: message,
  });
}

export { errorHandler };
