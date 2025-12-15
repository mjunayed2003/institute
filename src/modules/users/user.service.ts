import bcrypt from "bcrypt";
import prisma from "../../prisma/client.ts";
import type { CreateUserInput, LoginInput } from "./user.interface.ts";
import { generateToken } from "../../Utility/jwt.ts";

export const userService = {
  async registerUser(data: CreateUserInput) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const users = await prisma.user.findUnique({ where: { email: data.email } });
    if (users) throw new Error("User all ready exist");
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        passwordHash: hashedPassword,
        phoneNumber: data.phoneNumber ?? null,
        role: data.role ?? "STUDENT",
      },
    });
    return { message: "User registered successfully", user };
  },

  async loginUser(data: LoginInput) {
    const user = await prisma.user.findUnique({ where: { email: data.email } });
    if (!user) throw new Error("User not found");
    const isMatch = await bcrypt.compare(data.password, user.passwordHash);
    if (!isMatch) throw new Error("Incorrect password");
    const token = generateToken({ id: user.id, role: user.role });
    return { message: "Login successful", token, user };
  },

  async getUsers() {
    return prisma.user.findMany();
  },

  async getUserById(id: string) {
    return prisma.user.findUnique({ where: { id } });
  },

  async updateUser(id: string, data: Partial<CreateUserInput>) {
    return prisma.user.update({ where: { id }, data });
  },

  async deleteUser(id: string) {
    return prisma.user.delete({ where: { id } });
  },
};
