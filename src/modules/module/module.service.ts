import prisma from "../../prisma/client.js";
import type { CreateModuleInput, CreateLessonInput, UpdateModuleInput, UpdateLessonInput } from "./module.interface.js";

export const moduleService = {
  // Module
  async createModule(data: CreateModuleInput) {
    return prisma.module.create({ data });
  },

  async getModulesByCourse(courseId: string) {
    return prisma.module.findMany({
      where: { courseId },
      include: { lessons: true },
      orderBy: { order: "asc" },
    });
  },

  async updateModule(id: string, data: UpdateModuleInput) {
    return prisma.module.update({ where: { id }, data });
  },

  async deleteModule(id: string) {
    return prisma.module.delete({ where: { id } });
  },

  // Lesson
  async createLesson(data: CreateLessonInput) {
    return prisma.lesson.create({ data });
  },

  async getLessonsByModule(moduleId: string) {
    return prisma.lesson.findMany({ where: { moduleId } });
  },

  async updateLesson(id: string, data: UpdateLessonInput) {
    return prisma.lesson.update({ where: { id }, data });
  },

  async deleteLesson(id: string) {
    return prisma.lesson.delete({ where: { id } });
  },

  // Reorder Modules
  async reorderModules(courseId: string, moduleOrders: { id: string; order: number }[]) {
    const updates = moduleOrders.map(m =>
      prisma.module.update({ where: { id: m.id }, data: { order: m.order } })
    );
    return prisma.$transaction(updates);
  },
};
