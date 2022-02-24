import prisma from "lib/prisma";
import defaultHandler from "api-lib/_defaultHandler";
import { comparePassword } from "api-lib/auth/passwordUtils";
import { withSessionRoute } from "api-lib/auth/withSession";
import { BadRequestError } from "api-lib/errors/BadRequestError";
import Joi from "joi";
import { validateRequest } from "api-lib/middlewares/validate-request";

const rules = Joi.object({
  email: Joi.string()
    .trim()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string().trim().min(6).max(20).required(),
});
const handler = defaultHandler();

handler.use(validateRequest(rules)).post(async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (!existingUser) {
    throw new BadRequestError("Invalid Credentials");
  }

  const passwordMatch = await comparePassword(existingUser.password, password);

  if (!passwordMatch) {
    throw new BadRequestError("Invalid Credentials");
  }

  // deletes a password property
  delete existingUser.password;

  req.session.user = existingUser;
  await req.session.save();

  res.status(200).json(existingUser);
});

export default withSessionRoute(handler);
