export declare const adminService: {
    getAllUsers(): import("@prisma/client").Prisma.PrismaPromise<{
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
    }[]>;
    getUser(id: string): import("@prisma/client").Prisma.Prisma__UserClient<{
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
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    updateUser(id: string, data: any): import("@prisma/client").Prisma.Prisma__UserClient<{
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
    deleteUser(id: string): import("@prisma/client").Prisma.Prisma__UserClient<{
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
//# sourceMappingURL=admin.service.d.ts.map