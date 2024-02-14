import { ErrorRequestHandler } from 'express';
import { AppError } from '../utils/AppError';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.error('Error:', err);
    res.status(500).json({
      status: 'error',
      message: 'An error occurred',
    });
  }
};

export { errorHandler };
