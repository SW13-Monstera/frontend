import { PROBLEM_TAG, PROBLEM_TYPE } from '../../constants/problem';

export interface IProblemListRequest {
  id?: number;
  title?: string;
  description?: string;
  page?: number;
  size?: number;
}

export interface ILongProblem {
  id: number;
  title: string;
  creator: string;
  avgKeywordScore: number | null;
  avgContentScore: number | null;
  userAnswerCnt: number | null;
  isActive: boolean;
}

export interface IProblemListData {
  problems: ILongProblem[];
  totalPages: number;
  totalElements: number;
}

export interface IProblemDetailRequest {
  problem_id: string | null;
}

export interface IStandardResponse extends IStandard {
  id: number;
}

export interface IStandard {
  content: string;
  score: number;
  type: string;
}

export interface IProblemDetailResponse {
  id: number;
  title: string;
  description: string;
  standardAnswer: string;
  tags: string[];
  gradingStandards: IStandardResponse[];
  isActive: boolean;
  isGradable: boolean;
}

export interface IProblemCreateData {
  title: string;
  description: string;
  standardAnswer: string;
  tags: string[];
  gradingStandards: IStandard[];
}

export interface IProblemUpdateData extends IProblemCreateData {
  isActive: boolean;
  isGradable: boolean;
}

export interface IProblemListElement {
  id: number;
  title: string;
  creator: string;
  userAnswerCnt: number;
  isActive: boolean;
  answerRate?: number | null;
  avgKeywordScore?: number | null;
  avgContentScore?: number | null;
}

export type TProblemType = typeof PROBLEM_TYPE[keyof typeof PROBLEM_TYPE];
export type TProblemTag = typeof PROBLEM_TAG[keyof typeof PROBLEM_TAG];

export interface ISearchProblem {
  contents: ISearchProblemElement[];
  currentPage: number;
  totalPages: number;
  totalElements: number;
  numberOfElements: number;
  size: number;
}

export interface ISearchProblemElement {
  id: number;
  title: string;
  tags: TProblemTag[];
  avgScore: number;
  totalSubmission: number;
  type: TProblemType;
}

export interface IProblemSearchParam {
  query?: string;
  tags: TProblemTag[];
  type?: TProblemType;
  page?: number;
  size?: number;
}
