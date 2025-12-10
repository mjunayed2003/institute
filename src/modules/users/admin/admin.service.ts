import prisma from "../../../prisma/client.js";

export const adminService = {
  getAllUsers() {
    return prisma.user.findMany();
  },

  getUser(id: string) {
    return prisma.user.findUnique({ where: { id } });
  },

  updateUser(id: string, data: any) {
    return prisma.user.update({ where: { id }, data });
  },

  deleteUser(id: string) {
    return prisma.user.delete({ where: { id } });
  },
};
