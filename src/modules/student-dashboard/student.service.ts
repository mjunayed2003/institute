import prisma from "../../prisma/client.js";

export const studentService = {
  async getDashboard(userId: string) {
    // 1️⃣ Student Profile
    const profile = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        phoneNumber: true,
        avatar: true,
        role: true,
        createdAt: true,
      },
    });

    if (!profile) throw new Error("Student not found");

    // 2️⃣ Enrolled Courses + progress
    const enrollments = await prisma.enrollment.findMany({
      where: { userId },
      select: {
        course: {
          select: {
            id: true,
            title: true,
            slug: true,
            thumbnail: true,
            description: true,
            level: true,
            price: true,
            isPublished: true,
            mentor: {
              select: { id: true, name: true, email: true },
            },
          },
        },
        completedLessonIds: true,
        progressPercentage: true,
        enrolledAt: true,
      },
    });

    const courses = enrollments.map((enroll) => ({
      courseId: enroll.course.id,
      title: enroll.course.title,
      slug: enroll.course.slug,
      thumbnail: enroll.course.thumbnail,
      description: enroll.course.description,
      level: enroll.course.level,
      price: enroll.course.price,
      isPublished: enroll.course.isPublished,
      mentor: enroll.course.mentor,
      completedLessonIds: enroll.completedLessonIds,
      progressPercentage: enroll.progressPercentage,
      enrolledAt: enroll.enrolledAt,
    }));

    return {
      profile,
      courses,
    };
  },
};
