import type { LoginBody, LoginResponse, RegisterBody, User } from "@/types";
import axios from "@/plugins/axios";

export const login = async (payload: LoginBody) => axios.post<LoginResponse>("/auth/login", payload);

export const register = async (payload: RegisterBody) => axios.post("/auth/register", payload);

export const getUser = async () => axios.get<User>("/users/me");
