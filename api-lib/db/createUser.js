import { pick } from "lodash";

import prisma from "../../lib/prisma";
import { encryptPassword } from "../auth/passwordUtils";

export const createUser = async (params) => {
  const filteredParams = pick(params, [
    "firstName",
    "lastName",
    "email",
    "password",
    "phoneNo",
    "gender",
    "role",
  ]);
  const password = await encryptPassword(filteredParams.password);
  const user = await prisma.user.create({
    data: { ...filteredParams, password },
  });

  delete user.password;

  return user;
};
