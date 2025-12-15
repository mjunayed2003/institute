import type { EnrollStudentInput } from "./enrollment.interface.js";
export declare const enrollmentService: {
    enrollStudent(userId: string, data: EnrollStudentInput): Promise<{
        id: string;
        courseId: string;
        enrolledAt: Date;
        completedLessonIds: string[];
        progressPercentage: number;
        userId: string;
    }>;
    checkEnrollment(userId: string, courseId: string): Promise<boolean>;
    getMyCourses(userId: string): Promise<({
        course: {
            level: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            slug: string;
            description: string;
            thumbnail: string | null;
            price: number;
            discountPrice: number | null;
            category: string;
            language: string;
            hasCertificate: boolean;
            isPublished: boolean;
            translatedTo: string[];
            tags: string[];
            mentorId: string | null;
        };
    } & {
        id: string;
        courseId: string;
        enrolledAt: Date;
        completedLessonIds: string[];
        progressPercentage: number;
        userId: string;
    })[]>;
};
//# sourceMappingURL=enrollment.service.d.ts.map