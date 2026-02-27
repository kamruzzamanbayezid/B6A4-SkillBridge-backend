import { TutorProfileWhereInput } from "../../../generated/prisma/models";
import { prisma } from "../../lib/prisma";

const getAllTutors = async (query: any) => {
  const { search, categoryId, rating, price } = query;

  let andConditions: TutorProfileWhereInput[] = [];

  if (search) {
    andConditions.push({
      OR: [
        {
          user: {
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
        },
        { subjects: { contains: search, mode: "insensitive" } },
      ],
    });
  }

  if (categoryId) {
    andConditions.push({
      categoryId,
    });
  }

  if (rating) {
    andConditions.push({
      averageRating: { gte: Number(rating) },
    });
  }

  if (price) {
    andConditions.push({
      hourlyRate: { lte: Number(price) },
    });
  }

  const result = await prisma.tutorProfile.findMany({
    where: {
      AND: andConditions,
    },
    include: {
      category: true,
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
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
      slots: true,
    },
  });
  return result;
};

export const tutorProfileServices = {
  getAllTutors,
  getSingleTutor,
};
