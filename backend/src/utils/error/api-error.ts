export class ApiError extends Error {
  public statusCode: number;
  public errors: unknown[];
  public success: boolean;

  constructor(
    statusCode: number = 500,
    errorMessage: string = "Something went wrong!",
    errors: unknown[] = [],
    stack?: string,
  ) {
    super(errorMessage);

    this.name = "ApiError";
    this.statusCode = statusCode;
    this.errors = errors;
    this.success = false;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, ApiError);
    }
  }
}
