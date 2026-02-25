import { UserRole } from "../../../generated/prisma/enums";
import { UserWhereInput } from "../../../generated/prisma/models";
import { prisma } from "../../lib/prisma";

const getAllTutors = async (query: any) => {
  const { search, category, rating, price } = query;

  let andConditions: UserWhereInput[] = [];

  if (search) {
    andConditions.push({
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        {
          tutorProfile: { subject: { contains: search, mode: "insensitive" } },
        },
      ],
    });
  }

  if (category) {
    andConditions.push({
      tutorProfile: { category: category },
    });
  }

  if (rating) {
    andConditions.push({
      tutorProfile: { averageRating: { gte: Number(rating) } },
    });
  }

  if (price) {
    andConditions.push({
      tutorProfile: { hourlyRate: { lte: Number(price) } },
    });
  }

  const result = await prisma.user.findMany({
    where: {
      role: "TUTOR",
      AND: andConditions,
    },
    include: { tutorProfile: true },
    orderBy: { createdAt: "desc" },
  });

  return result;
};

const getAllUsersOrRole = async (role: UserRole) => {
  const result = await prisma.user.findMany({
    where: {
      role: role,
    },
    include: {
      tutorProfile: true,
    },
    orderBy: {
      tutorProfile: {
        averageRating: "asc",
      },
    },
  });
  return result;
};

const getStudentCount = async () => {
  const count = await prisma.user.count({
    where: {
      role: "STUDENT",
    },
  });
  return count;
};

export const UserServices = {
  getAllTutors,
  getStudentCount,
  getAllUsersOrRole,
};
