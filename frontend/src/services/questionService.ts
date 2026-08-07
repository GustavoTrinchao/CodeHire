import { api } from "../api/api";
import type { QuestionDto, Question } from "@/types/question";

export async function getQuestions(): Promise<QuestionDto[]> {
    const response = await api.get<QuestionDto[]>("/questions");

    return response.data;
}

export async function createQuestion(data: Question) {
    const response = await api.post("/questions", data);

    return response.data;
}

export async function updateQuestion(data: Question) {
    const response = await api.put("/questions", data);

    return response.data;
}

export async function deleteQuestion(id: string) {
    const response = await api.delete(`/questions/${id}`);

    return response.data;
}

export async function getQuestion(id: string) {
    const response = await api.get(`/questions/${id}`);

    return response.data;
}