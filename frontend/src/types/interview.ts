export type InterviewStatus = "ACTIVE" | "DRAFT" | "CLOSED";
 
export interface Interview {
  id: number;
  title: string;
  questions: number;
  duration: string;
  status: InterviewStatus;
  createdAt: string;
};