class ApiResponse<T = any> {
  public status: number;
  public success: boolean;
  public message: string;
  public data: T;

  constructor(statusCode: number = 200, data = {} as T, message: string = "") {
    this.success = statusCode < 400;
    this.status = statusCode;
    this.data = data;
    this.message = message;
  }
}

export default ApiResponse;
