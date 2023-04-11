import { IStandardResponse } from '../problem/api';

interface IDataListRequest {
  id?: number;
  assignedBy?: string;
  validatedBy?: string;
  problemTitle?: string;
  answer?: string;
  isLabeled?: boolean;
  isValidated?: boolean;
  size?: number;
  page?: number;
}

interface IDataListElement {
  id: number;
  problemTitle: string;
  assignedUsername: string;
  validatingUsername: string;
  updatedAt: string;
  isLabeled: boolean;
  isValidated: boolean;
}

interface IDataListResponse {
  userAnswers: IDataListElement[];
  totalElements: number;
  totalPages: number;
}

interface IDataDetailRequest {
  user_answer_id: string;
  selectedGradingStandardIds?: number[];
}

interface IDataDetailResponseData {
  id: number;
  answer: string;
  isLabeled: boolean;
  isValidated: boolean;
  keywordsGradingStandards: IStandardResponse[];
  contentGradingStandards: IStandardResponse[];
  problemId: number;
  problemTitle: string;
  problemDescription: string;
  selectedGradingStandards: number[];
}

interface IUserAnswer {
  assignedUserId: string;
  validatingUserId: string;
  answer: string;
  problemId: number;
}

interface IDataListCreateRequestData {
  size: number;
  userAnswers: IUserAnswer[];
}

export type {
  IDataListRequest,
  IDataDetailRequest,
  IUserAnswer,
  IDataListCreateRequestData,
  IDataListResponse,
  IDataListElement,
  IDataDetailResponseData,
};
