import Joi from "joi";

import defaultHandler from "api-lib/_defaultHandler";
import { createUser } from "api-lib/db/createUser";
import { withSessionRoute } from "api-lib/auth/withSession";
import prisma from "lib/prisma";
import { BadRequestError } from "api-lib/errors/BadRequestError";
import { validateRequest } from "api-lib/middlewares/validate-request";

const rules = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  email: Joi.string()
    .trim()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string().trim().min(6).max(20).required(),
  phoneNo: Joi.string().trim().required(),
  gender: Joi.string().trim().required().max(1),
  role: Joi.string().trim().required(),
});
const handler = defaultHandler();

handler.use(validateRequest(rules)).post(async (req, res) => {
  const existingUser = await prisma.user.findUnique({
    where: { email: req.body.email },
  });

  if (existingUser) {
    throw new BadRequestError("Email in use", "email");
  }

  const user = await createUser(req.body);

  req.session.user = user;
  await req.session.save();

  res.status(201).json(user);
});

export default withSessionRoute(handler);
