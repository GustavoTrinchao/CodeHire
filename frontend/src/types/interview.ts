export type InterviewStatus = "Active" | "Draft" | "Closed";
 
export interface Interview {
  id: number;
  title: string;
  questions: number;
  duration: string;
  status: InterviewStatus;
  createdAt: string;
};