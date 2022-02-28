import { CustomError } from "./CustomError";
import { capitalize } from "lodash";

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(errors) {
    super("Invalid request parameters");
    this.errors = errors;
  }

  serializeErrors() {
    return this.errors.details.map((obj) => {
      return {
        message: capitalize(obj.message.replaceAll('"', "")),
        field: obj.path[0],
      };
    });
  }
}
