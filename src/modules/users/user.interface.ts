export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  phoneNumber?: string;
}

export interface LoginInput {
  email: string;
  password: string;
}
