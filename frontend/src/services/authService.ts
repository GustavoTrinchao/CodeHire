import { api } from "../api/api";

export interface User {
  id: string;
  email: string;
  name: string;
  company: string;
  role: "USER" | "RECRUITER";
}

interface LoginRequest {
    email: string;
    password: string;
}

interface LoginResponse {
    token: string;
    user: User;
}

interface RegisterData {
    email: string;
    password: string;
    name: string;
    company: string;
    role: string;
}

export async function login(data: LoginRequest) {

    const response = await api.post<LoginResponse>(
        "/auth/login",
        data
    );

    return response.data;
}

export async function register(data: RegisterData) {
    const response = await api.post("/auth/register", data);

    return response.data;
}

export function saveUser(user: User) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUser(): User | null {
  const data = localStorage.getItem("user");

  if (!data) return null;

  return JSON.parse(data) as User;
}

export function saveToken(token: string) {
  localStorage.setItem("token", token);
}

export function getToken() {
  return localStorage.getItem("token");
}

export function logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
}