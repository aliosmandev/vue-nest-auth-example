export interface User {
  _id: number;
  email: string;
  password: string;
}

export type UserWithoutPassword = Omit<User, "password">;

export interface LoginBody {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}

export type RegisterBody = LoginBody;
