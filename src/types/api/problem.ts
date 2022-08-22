import { TProblemType } from '../problem';

export interface IProblemRequestParam {
  query?: string;
  tags?: string;
  isSolved?: boolean | null;
  page?: number;
  size?: number;
  type?: string;
  isGradable?: boolean | null;
}

export interface IProblemDetailResponseData {
  id: number;
  title: string;
  tags: string[];
  description: string;
  totalSolved: number;
  type: TProblemType;
}

export interface ILongProblemDetailResponseData extends IProblemDetailResponseData {
  avgScore: number;
  topScore: number;
  bottomScore: number;
}

export interface ILongProblemResultData extends ILongProblemDetailResponseData {
  gradingHistoryId: number;
  problemId: number;
  score: number;
  keywords: IkeywordResult[];
  userAnswer: string;
  standardAnswer: string;
}

export interface IShortProblemDetailResponseData extends IProblemDetailResponseData {
  correctCnt: number;
  wrongCnt: number;
  answerLength: number;
}

export interface IShortProblemResultData extends IShortProblemDetailResponseData {
  gradingHistoryId: number;
  problemId: number;
  score: number;
  userAnswer: string;
  isAnswer: boolean;
  answerLength: number;
}

export interface IMultipleProblemDetailResponseData extends IProblemDetailResponseData {
  correctCnt: number;
  wrongCnt: number;
  choices: IChoice[];
}

export interface IMultipleProblemResultData extends IMultipleProblemDetailResponseData {
  gradingHistoryId: number;
  problemId: number;
  score: number;
  userAnswerIds: number[];
  isAnswer: boolean;
}

export interface IProblemListResponseDataContents {
  id: number;
  title: string;
  tags: string[];
  avgScore: number;
  totalSolved: number;
  type: TProblemType;
}

export interface IProblemListResponseData {
  contents: IProblemListResponseDataContents[];
  currentPage: number;
  totalPages: number;
  totalElements: number;
  numberOfElements: number;
  size: number;
}

export interface IChoice {
  id: number;
  content: string;
}

export interface IkeywordResult {
  id: number;
  content: string;
  isExist: boolean;
  idx: number[];
}
