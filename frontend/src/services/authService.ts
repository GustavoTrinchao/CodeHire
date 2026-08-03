import { api } from "../api/api";

interface LoginRequest {
    email: string;
    password: string;
}

interface LoginResponse {
    token: string;
    id: string
    email: string;
    name: string;
    company: string;
    role: string;
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