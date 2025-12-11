import prisma from "../../prisma/client.js";
import type { EnrollStudentInput } from "./enrollment.interface.js";

export const enrollmentService = {
  // Enroll a student in a course
  async enrollStudent(userId: string, data: EnrollStudentInput) {
    // Check if already enrolled
    const existing = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: { userId, courseId: data.courseId },
      },
    });

    if (existing) throw new Error("Student already enrolled in this course");

    return prisma.enrollment.create({
      data: {
        userId,
        courseId: data.courseId,
      },
    });
  },

  // Check if a student is enrolled
  async checkEnrollment(userId: string, courseId: string) {
    const enrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: { userId, courseId },
      },
    });
    return !!enrollment;
  },

  // Get all courses a student is enrolled in
  async getMyCourses(userId: string) {
    return prisma.enrollment.findMany({
      where: { userId },
      include: {  
        course: true,
      },
      orderBy: { enrolledAt: "desc" },
    });
  },
};
