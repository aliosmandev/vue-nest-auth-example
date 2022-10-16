import axios, { type AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers!.Authorization = `Bearer ${token}`;
    config.headers!["Content-Type"] = "application/json";
  }
  return config;
});

export default instance;
