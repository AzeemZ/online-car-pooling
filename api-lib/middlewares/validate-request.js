import { RequestValidationError } from "api-lib/errors/RequestValidationError";

export function validateRequest(rules) {
  return (req, res, next) => {
    const { error } = rules.validate(req.body, { abortEarly: false });

    if (error) {
      throw new RequestValidationError(error);
    }

    next();
  };
}
