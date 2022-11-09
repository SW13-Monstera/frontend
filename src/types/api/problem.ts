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
  totalSubmission: number;
  type: TProblemType;
  isSolved: boolean;
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
  contents: IContentResult[];
  userAnswer: string;
  standardAnswer: string;
}

export interface IShortProblemDetailResponseData extends IProblemDetailResponseData {
  correctSubmission: number;
  correctUserCnt: number;
  answerLength: number;
  isEnglish: boolean;
}

export interface IShortProblemResultData extends IShortProblemDetailResponseData {
  gradingHistoryId: number;
  problemId: number;
  score: number;
  userAnswer: string;
  isAnswer: boolean;
  answerLength: number;
  correctAnswer: string;
}

export interface IMultipleProblemDetailResponseData extends IProblemDetailResponseData {
  correctSubmission: number;
  correctUserCnt: number;
  choices: IChoice[];
  isMultipleAnswer: boolean;
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
  totalSubmission: number;
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

export interface IContentResult {
  id: number;
  content: string;
  isExist: boolean;
}

export const ASSESSMENT_TYPE = {
  GOOD: 'GOOD',
  BAD: 'BAD',
  NORMAL: 'NORMAL',
};

export type TAssessment = keyof typeof ASSESSMENT_TYPE;

export interface IAssessmentRequest {
  assessmentType: TAssessment;
  content?: string;
}
