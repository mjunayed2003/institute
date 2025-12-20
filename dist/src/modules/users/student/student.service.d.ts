export declare const studentService: {
    getProfile(userId: string): import("../../../generated/prisma/models.ts").Prisma__UserClient<({
        enrollments: ({
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
        })[];
    } & {
        id: string;
        name: string;
        email: string;
        passwordHash: string;
        phoneNumber: string | null;
        avatar: string | null;
        role: import("../../../generated/prisma/enums.ts").UserRole;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace.ts").GlobalOmitConfig | undefined;
    }>;
    updateProfile(userId: string, data: any): import("../../../generated/prisma/models.ts").Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        passwordHash: string;
        phoneNumber: string | null;
        avatar: string | null;
        role: import("../../../generated/prisma/enums.ts").UserRole;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace.ts").GlobalOmitConfig | undefined;
    }>;
};
//# sourceMappingURL=student.service.d.ts.map