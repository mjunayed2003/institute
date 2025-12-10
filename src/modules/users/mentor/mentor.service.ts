import prisma from "../../../prisma/client.js";

export const mentorService = {
  getProfile(userId: string) {
    return prisma.user.findUnique({
      where: { id: userId },
      include: {
        coursesAsMentor: true,
      },
    });
  },

  updateProfile(userId: string, data: any) {
    return prisma.user.update({ where: { id: userId }, data });
  },

  createCourse(userId: string, courseData: any) {
    return prisma.course.create({
      data: {
        ...courseData,
        mentorId: userId,
      },
    });
  },

  getCourses(userId: string) {
    return prisma.course.findMany({ where: { mentorId: userId } });
  },

  updateCourse(courseId: string, userId: string, data: any) {
    return prisma.course.updateMany({
      where: { id: courseId, mentorId: userId },
      data,
    });
  },

  deleteCourse(courseId: string, userId: string) {
    return prisma.course.deleteMany({ where: { id: courseId, mentorId: userId } });
  },
};
