import { prisma } from "../../lib/prisma";

const getAllTutors = async (payload: { search: string }) => {
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

const getSingleTutor = async (tutorId: string) => {
  const result = await prisma.tutorProfile.findUniqueOrThrow({
    where: {
      id: tutorId,
    },
    include: {
      user: true,
      category: true,
      availability: true,
    },
  });
  return result;
};

export const tutorProfileServices = {
  getAllTutors,
  getSingleTutor,
};
