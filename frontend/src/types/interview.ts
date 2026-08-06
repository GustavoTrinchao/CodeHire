export type InterviewStatus = "ACTIVE" | "DRAFT" | "CLOSED";
 
export interface Interview {
  id: string;
  title: string;
  questions: number;
  duration: string;
  status: InterviewStatus;
  createdAt: string;
};