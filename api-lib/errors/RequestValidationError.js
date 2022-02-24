import { CustomError } from "./CustomError";

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(errors) {
    super("Invalid request parameters");
    this.errors = errors;
  }

  serializeErrors() {
    return this.errors.details.map((obj) => {
      return { message: obj.message.replaceAll('"', ""), field: obj.path[0] };
    });
  }
}
