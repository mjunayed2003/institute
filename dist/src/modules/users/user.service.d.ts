import type { CreateUserInput, LoginInput } from "./user.interface.ts";
export declare const userService: {
    registerUser(data: CreateUserInput): Promise<{
        message: string;
        user: {
            id: string;
            name: string;
            email: string;
            passwordHash: string;
            phoneNumber: string | null;
            avatar: string | null;
            role: import("../../generated/prisma/enums.ts").UserRole;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    loginUser(data: LoginInput): Promise<{
        message: string;
        token: string;
        user: {
            id: string;
            name: string;
            email: string;
            passwordHash: string;
            phoneNumber: string | null;
            avatar: string | null;
            role: import("../../generated/prisma/enums.ts").UserRole;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    getUsers(): Promise<{
        id: string;
        name: string;
        email: string;
        passwordHash: string;
        phoneNumber: string | null;
        avatar: string | null;
        role: import("../../generated/prisma/enums.ts").UserRole;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getUserById(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        passwordHash: string;
        phoneNumber: string | null;
        avatar: string | null;
        role: import("../../generated/prisma/enums.ts").UserRole;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    updateUser(id: string, data: Partial<CreateUserInput>): Promise<{
        id: string;
        name: string;
        email: string;
        passwordHash: string;
        phoneNumber: string | null;
        avatar: string | null;
        role: import("../../generated/prisma/enums.ts").UserRole;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteUser(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        passwordHash: string;
        phoneNumber: string | null;
        avatar: string | null;
        role: import("../../generated/prisma/enums.ts").UserRole;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
};
//# sourceMappingURL=user.service.d.ts.map