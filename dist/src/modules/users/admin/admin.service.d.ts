export declare const adminService: {
    getAllUsers(): import("../../../generated/prisma/internal/prismaNamespace.ts").PrismaPromise<{
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
    }[]>;
    getUser(id: string): import("../../../generated/prisma/models.ts").Prisma__UserClient<{
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
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace.ts").GlobalOmitConfig | undefined;
    }>;
    updateUser(id: string, data: any): import("../../../generated/prisma/models.ts").Prisma__UserClient<{
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
    deleteUser(id: string): import("../../../generated/prisma/models.ts").Prisma__UserClient<{
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
//# sourceMappingURL=admin.service.d.ts.map