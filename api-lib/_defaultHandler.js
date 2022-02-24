import nextConnect from "next-connect";
import { CustomError } from "./errors/CustomError";

function defaultHandler() {
  return nextConnect({
    attachParams: true,
    onError: (err, req, res) => {
      if (err instanceof CustomError) {
        return res
          .status(err.statusCode)
          .send({ errors: err.serializeErrors() });
      }

      console.error(err);

      res.status(500).json({ errors: [{ message: "Internal Server Error" }] });
    },
    onNoMatch: (req, res) => {
      res.status(404).json({ errors: [{ message: "Not Found" }] });
    },
  });
}

export default defaultHandler;
