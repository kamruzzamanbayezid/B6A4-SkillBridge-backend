import { prisma } from "../../lib/prisma";

const getAllTutors = async () => {
  const result = await prisma.tutorProfile.findMany();
  return result;
};

export const tutorProfileServices = {
  getAllTutors,
};
