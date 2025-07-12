export class AppError extends Error {
  /**
   * @param {string} message     
   * @param {number} statusCode 
   * @param {Error}  [cause]    
   */
  constructor(message, statusCode, cause) {

    super(message, { cause });
    this.name = this.constructor.name; 
    this.statusCode = statusCode;
    this.isOperational = true;           
    Error.captureStackTrace(this, this.constructor);
  }
}

export class ServiceError extends AppError {
  constructor(message = 'Service failed', cause) {
    super(message, 500, cause);
  }
}

export class UrlCreationError extends ServiceError {
  constructor(message = 'Could not create short URL', cause) {
    super(message, cause);
  }
}

export class DatabaseError extends ServiceError {
  constructor(message = 'Database Error', cause) {
    super(message, cause);
  }
}

export class NotFoundError extends AppError {
  constructor(message = 'Not Found', cause) {
    super(message, 404, cause);
  }
}

export class ValidationError extends AppError {
  constructor(message = 'Invalid Input', cause) {
    super(message, 400, cause);
  }
}