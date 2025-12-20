export declare const mentorService: {
    getProfile(userId: string): import("@prisma/client").Prisma.Prisma__UserClient<({
        coursesAsMentor: {
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
        }[];
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
    createCourse(userId: string, courseData: any): import("@prisma/client").Prisma.Prisma__CourseClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    getCourses(userId: string): import("@prisma/client").Prisma.PrismaPromise<{
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
    }[]>;
    updateCourse(courseId: string, userId: string, data: any): import("@prisma/client").Prisma.PrismaPromise<import("@prisma/client").Prisma.BatchPayload>;
    deleteCourse(courseId: string, userId: string): import("@prisma/client").Prisma.PrismaPromise<import("@prisma/client").Prisma.BatchPayload>;
};
//# sourceMappingURL=mentor.service.d.ts.map