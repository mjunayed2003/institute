export declare const mentorService: {
    getProfile(userId: string): import("../../../generated/prisma/models.ts").Prisma__UserClient<({
        coursesAsMentor: {
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
        }[];
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
    createCourse(userId: string, courseData: any): import("../../../generated/prisma/models.ts").Prisma__CourseClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace.ts").GlobalOmitConfig | undefined;
    }>;
    getCourses(userId: string): import("../../../generated/prisma/internal/prismaNamespace.ts").PrismaPromise<{
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
    }[]>;
    updateCourse(courseId: string, userId: string, data: any): import("../../../generated/prisma/internal/prismaNamespace.ts").PrismaPromise<import("../../../generated/prisma/internal/prismaNamespace.ts").BatchPayload>;
    deleteCourse(courseId: string, userId: string): import("../../../generated/prisma/internal/prismaNamespace.ts").PrismaPromise<import("../../../generated/prisma/internal/prismaNamespace.ts").BatchPayload>;
};
//# sourceMappingURL=mentor.service.d.ts.map