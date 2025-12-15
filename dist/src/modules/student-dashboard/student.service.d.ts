export declare const studentService: {
    getDashboard(userId: string): Promise<{
        profile: {
            id: string;
            name: string;
            email: string;
            phoneNumber: string | null;
            avatar: string | null;
            role: import("../../../generated/prisma/enums.ts").UserRole;
            createdAt: Date;
        };
        courses: {
            courseId: string;
            title: string;
            slug: string;
            thumbnail: string | null;
            description: string;
            level: string;
            price: number;
            isPublished: boolean;
            mentor: {
                id: string;
                name: string;
                email: string;
            } | null;
            completedLessonIds: string[];
            progressPercentage: number;
            enrolledAt: Date;
        }[];
    }>;
};
//# sourceMappingURL=student.service.d.ts.map