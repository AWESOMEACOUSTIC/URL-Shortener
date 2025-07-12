import { AppError } from '../utils/error.js';

export function errorHandler(err, req, res, next) {
  const status = err instanceof AppError ? err.statusCode : 500;
  const message = err instanceof AppError
    ? err.message
    : 'Internal Server Error';

  res.status(status).json({ error: message });
}
