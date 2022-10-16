export interface User {
  _id: number;
  email: string;
  password: string;
}

export type UserWithoutPassword = Omit<User, "password">;

export interface LoginPayload {
  email: string;
  password: string;
}
