import { ITagBox } from './tag';

interface IProblem {
  id: string;
  title: string;
  tagList: string[];
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

export type { IProblem, IProblemIdLinkState, ITag };
