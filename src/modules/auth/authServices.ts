import { User } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcryptjs";

const createUser = async (
  payload: Omit<User, "id" | "updatedAt" | "createdAt">,
) => {
  const hashedPassword = await bcrypt.hash(payload?.password, 8);

  const result = await prisma.user.create({
    data: { ...payload, password: hashedPassword },
  });

  const { password, ...newResult } = result;

  return newResult;
};

const loginUser = async (email: string, password: string) => {};

export const authService = {
  createUser,
  loginUser,
};
