import prisma from "../../prisma/client.ts";
import type { CreateCourseInput, UpdateCourseInput, AssignMentorInput } from "./course.interface.js";

export const courseService = {
  // CREATE COURSE (Admin or Mentor)
  async createCourse(data: CreateCourseInput, creatorId: string) {
    return prisma.course.create({   
      data: {
        ...data,
        mentorId: creatorId, // default creator as mentor
        isPublished: false,
      },
    });
  },

  // GET ALL COURSES
  async getAllCourses() {
    return prisma.course.findMany({
      include: {
        mentor: true,
      },
    });
  },

  // GET ONE COURSE
  async getCourseById(id: string) {
    return prisma.course.findUnique({
      where: { id },
      include: {
        mentor: true,
        modules: true,
      },
    });
  },

  // UPDATE COURSE
  async updateCourse(id: string, data: UpdateCourseInput) {
    return prisma.course.update({
      where: { id },
      data,
    });
  },

  // DELETE COURSE
  async deleteCourse(id: string) {
    return prisma.course.delete({
      where: { id },
    });
  },

  // PUBLISH / UNPUBLISH
  async togglePublish(courseId: string, status: boolean) {
    return prisma.course.update({
      where: { id: courseId },
      data: { isPublished: status },
    });
  },

  // ASSIGN MENTOR
  async assignMentor(data: AssignMentorInput) {
    return prisma.course.update({
      where: { id: data.courseId },
      data: {
        mentorId: data.mentorId,
      },
    });
  },
};
