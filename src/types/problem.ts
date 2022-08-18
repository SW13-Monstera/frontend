import { ITagBox } from './tag';

interface IProblem {
  id: string;
  title: string;
  tagList: string[];
  type?: TProblemType;
  numberSolved?: number;
  averageScore?: number;
  highestScore?: number;
  lowestScore?: number;
  desc?: string;
  keywordList?: string[];
  answer?: string;
}

interface IProblemIdLinkState {
  problemId: number;
}

interface ITag extends ITagBox {
  id: string;
}

const PROBLEM_TYPE = { LONG: 'long', SHORT: 'short', MULTIPLE: 'multiple' } as const;
type TProblemType = typeof PROBLEM_TYPE[keyof typeof PROBLEM_TYPE];

export type { IProblem, IProblemIdLinkState, ITag, TProblemType };
