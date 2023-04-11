export interface ICreateShortProblemRequest {
  title: string;
  description: string;
  tags: string[];
  answer: string;
  score: number;
}

export interface IShortProblemDetailResponse extends ICreateShortProblemRequest {
  id: number;
  isActive: boolean;
  isGradable: boolean;
}

export interface IShortProblemListResponse {
  problems: IShortProblemListElement[];
  totalElements: number;
}

export interface IShortProblemListElement {
  id: number;
  title: string;
  creator: string;
  answerRate: number | null;
  userAnswerCnt: number;
  isActive: boolean;
}
