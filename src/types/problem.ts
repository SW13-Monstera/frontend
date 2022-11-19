import { PROBLEM_TYPE } from '../constants/problem';
import {
  ILongProblemDetailResponseData,
  ILongProblemResultData,
  IMultipleProblemDetailResponseData,
  IShortProblemDetailResponseData,
} from './api/problem';
import { ITagBox } from './tag';

interface IProblem {
  id: string;
  title: string;
  tags: string[];
  type?: TProblemType;
  totalSubmission?: number;
  avgScore?: number;
  topScore?: number;
  bottomScore?: number;
  desc?: string;
  keywordList?: string[];
  answer?: string;
  correctSubmission?: number;
  correctUserCnt?: number;
  isSolved?: boolean;
}

interface IQuestionListElementBox {
  id: number;
  title: string;
  tags: string[];
  type: TProblemType;
  totalSubmission?: number;
  correctSubmission?: number;
  correctUserCnt?: number;
  avgScore?: number;
  topScore?: number;
  bottomScore?: number;
  isColumn?: boolean;
  isSolved?: boolean;
}

interface IProblemIdLinkState {
  problemId: number;
}

interface ITag extends ITagBox {
  id: string;
}

type TProblemType = typeof PROBLEM_TYPE[keyof typeof PROBLEM_TYPE];

interface IProblemDetailResponseData
  extends IShortProblemDetailResponseData,
    IMultipleProblemDetailResponseData,
    ILongProblemDetailResponseData {}

type TPartialProblemDetailResponseData = Partial<IProblemDetailResponseData>;

interface IProblemDetailPageTemplate {
  data: TPartialProblemDetailResponseData | undefined;
  children?: React.ReactNode;
  handleSubmit?: () => void;
  getAnswerWithoutSubmit?: () => void;
  isResult?: boolean;
  isProblemSet?: boolean;
  resetResult?: () => void;
  isResultPage?: boolean;
  bottomContent?: React.ReactNode;
  isSubmittable?: boolean;
  isLong?: boolean;
}

interface ISplitProblemDetailPageTemplate extends IProblemDetailPageTemplate {
  leftSideContent?: React.ReactNode;
  rightSideContent?: React.ReactNode;
  sizes?: number[];
  isSubmittable?: boolean;
  isLong?: boolean;
  getAnswerWithoutSubmit?: () => void;
}

export interface IMypageProblem {
  id: number;
  title: string;
  type: typeof PROBLEM_TYPE[keyof typeof PROBLEM_TYPE];
}

export interface ILongProblemResultLocationState {
  userAnswer: string;
  title: string;
  id: string;
  tags: string[];
}

export const PROBLEM_TITLE_SIZE = {
  LARGE: 'large',
  SMALL: 'small',
} as const;

export type TProblemTitleSize = typeof PROBLEM_TITLE_SIZE[keyof typeof PROBLEM_TITLE_SIZE];

export interface ILongProblemResult {
  result: ILongProblemResultData | undefined;
}

export type {
  IProblem,
  IProblemIdLinkState,
  ITag,
  TProblemType,
  IQuestionListElementBox,
  IProblemDetailPageTemplate,
  TPartialProblemDetailResponseData,
  ISplitProblemDetailPageTemplate,
};
