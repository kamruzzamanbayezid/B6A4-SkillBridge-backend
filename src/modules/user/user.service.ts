import { prisma } from "../../lib/prisma";

interface GetAllUsersPayload {
  searchTerm?: string | undefined;
}

const getAllUsers = async (payload: GetAllUsersPayload) => {
  const result = await prisma.user.findMany({
    where: {
      role: payload?.role,
    },
  });
  return result;
};

// Get specific count for students
const getStudentCount = async () => {
  const count = await prisma.user.count({
    where: {
      role: "STUDENT",
    },
  });
  return count;
};

export const UserServices = {
  getAllUsers,
  getStudentCount,
};
