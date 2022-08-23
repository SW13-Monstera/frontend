import {
  ILongProblemDetailResponseData,
  IMultipleProblemDetailResponseData,
  IShortProblemDetailResponseData,
} from './api/problem';
import { ITagBox } from './tag';

interface IProblem {
  id: string;
  title: string;
  tags: string[];
  type?: TProblemType;
  totalSolved?: number;
  avgScore?: number;
  topScore?: number;
  bottomScore?: number;
  desc?: string;
  keywordList?: string[];
  answer?: string;
  correctCnt?: number;
  wrongCnt?: number;
}

interface IQuestionListElementBox {
  id: number;
  title: string;
  tags: string[];
  type: TProblemType;
  totalSolved: number;
  avgScore?: number;
}

interface IProblemIdLinkState {
  problemId: number;
}

interface ITag extends ITagBox {
  id: string;
}

const PROBLEM_TYPE = { LONG: 'long', SHORT: 'short', MULTIPLE: 'multiple' } as const;
type TProblemType = typeof PROBLEM_TYPE[keyof typeof PROBLEM_TYPE];

interface IProblemDetailResponseData
  extends IShortProblemDetailResponseData,
    IMultipleProblemDetailResponseData,
    ILongProblemDetailResponseData {}

type TPartialProblemDetailResponseData = Partial<IProblemDetailResponseData>;

interface IProblemDetailPageTemplate {
  data: TPartialProblemDetailResponseData | undefined;
  handleSubmit: () => void;
  children?: React.ReactNode;
}

export type {
  IProblem,
  IProblemIdLinkState,
  ITag,
  TProblemType,
  IQuestionListElementBox,
  IProblemDetailPageTemplate,
  TPartialProblemDetailResponseData,
};
