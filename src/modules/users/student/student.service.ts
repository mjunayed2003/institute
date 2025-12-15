import prisma from "../../../prisma/client.ts";

export const studentService = {
  getProfile(userId: string) {
    return prisma.user.findUnique({
      where: { id: userId },
      include: {
        enrollments: {
          include: {
            course: true,
          },
        },
      },
    });
  },

  updateProfile(userId: string, data: any) {
    return prisma.user.update({ where: { id: userId }, data });
  },
};
