import { api } from "../api/api";
import type { QuestionDto, CreateQuestionRequest } from "@/types/question";

export async function getQuestions(): Promise<QuestionDto[]> {
    const response = await api.get<QuestionDto[]>("/questions");

    return response.data;
}

export async function createQuestion(data: CreateQuestionRequest) {
    const response = await api.post("/questions", data);

    return response.data;
}