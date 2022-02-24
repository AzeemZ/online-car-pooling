import { CustomError } from "./CustomError";

export class BadRequestError extends CustomError {
  statusCode = 400;

  constructor(msg, field) {
    super(msg);
    this.msg = msg;
    this.field = field;
  }

  serializeErrors() {
    if (!this.field) {
      return [{ message: this.msg }];
    }

    return [{ message: this.msg, field: this.field }];
  }
}
