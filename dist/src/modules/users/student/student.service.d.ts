export declare const studentService: {
    getProfile(userId: string): import("@prisma/client").Prisma.Prisma__UserClient<({
        enrollments: ({
            course: {
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
                level: string;
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
        })[];
    } & {
        id: string;
        name: string;
        email: string;
        passwordHash: string;
        phoneNumber: string | null;
        avatar: string | null;
        role: import("@prisma/client").$Enums.UserRole;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    updateProfile(userId: string, data: any): import("@prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        passwordHash: string;
        phoneNumber: string | null;
        avatar: string | null;
        role: import("@prisma/client").$Enums.UserRole;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
};
//# sourceMappingURL=student.service.d.ts.map