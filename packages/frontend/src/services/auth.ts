import type { LoginBody, LoginResponse, User } from "@/types";
import axios from "@/plugins/axios";

export const login = async (payload: LoginBody) => axios.post<LoginResponse>("/auth/login", payload);

export const getUser = async () => axios.get<User>("/users/me");
