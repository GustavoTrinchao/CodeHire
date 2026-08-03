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

export async function login(data: LoginRequest) {

    const response = await api.post<LoginResponse>(
        "/auth/login",
        data
    );

    return response.data;
}