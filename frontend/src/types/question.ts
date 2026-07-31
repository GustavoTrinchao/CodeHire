export type QuestionDifficulty = "EASY" | "MEDIUM" | "HARD";
export type QuestionType = "CODE" | "OPEN_TEXT" | "MULTIPLE_CHOICE";
 
export interface Question {
  id: number;
  title: string;
  difficulty: QuestionDifficulty;
  type: QuestionType;
  tags: string[];
};