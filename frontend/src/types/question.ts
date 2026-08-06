export type QuestionDifficulty = "EASY" | "MEDIUM" | "HARD";
export type QuestionType = "CODE" | "OPEN_TEXT" | "MULTIPLE_CHOICE";
 
export interface QuestionDto {
  id: string;
  title: string;
  difficulty: QuestionDifficulty;
  type: QuestionType;
  tags: string[];
};

export interface Question {
  id: string;
  title: string;
  description: string;
  difficulty: QuestionDifficulty;
  type: QuestionType;
  tags: string[];
  starterCode: string;
  options: QuestionOption[];
};

export interface QuestionOption{
  content: string;
  correct: boolean;
  id: string;
}

export interface CreateQuestionRequest {
  title: string;
  description: string;
  difficulty: QuestionDifficulty;
  type: QuestionType;
  tags: string[];
  starterCode: string;
  options: QuestionOptionRequest[];
}

export interface QuestionOptionRequest{
  content: string;
  correct: boolean;
}