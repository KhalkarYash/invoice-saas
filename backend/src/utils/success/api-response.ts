export class ApiResponse {
  public statusCode: number;
  public data: object;
  public message: string;
  public errors: unknown[] | null = null;

  constructor(statusCode = 200, data = {}, message = "Success!", errors = null) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.errors = errors;
  }
}
