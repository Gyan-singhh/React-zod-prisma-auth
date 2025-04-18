class ApiError extends Error {
  statusCode: number;
  message: string;

  constructor(statusCode: number, message: string = "Something went wrong") {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
  }
}

export { ApiError };
