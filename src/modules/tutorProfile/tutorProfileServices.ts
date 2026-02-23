import { prisma } from "../../lib/prisma";

const getAllTutors = async (payload: { search: string }) => {
  console.log(payload?.search);
  const result = await prisma.tutorProfile.findMany({
    where: {
      subject: {
        contains: payload?.search,
        mode: "insensitive",
      },
    },
  });
  return result;
};

export const tutorProfileServices = {
  getAllTutors,
};
