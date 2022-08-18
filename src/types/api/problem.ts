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
}

export interface ILongProblemDetailResponseData extends IProblemDetailResponseData {
  avgScore: number;
  topScore: number;
  bottomScore: number;
}

export interface IShortProblemDetailResponseData extends IProblemDetailResponseData {
  correctCnt: number;
  wrongCnt: number;
  answerLength: number;
}

export interface IMultipleProblemDetailResponseData extends IProblemDetailResponseData {
  correctCnt: number;
  wrongCnt: number;
  choices: IChoice[];
}

export interface IProblemListResponseDataContents {
  id: number;
  title: string;
  tags: string[];
  avgScore: number;
  totalSolved: number;
  type: string;
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
