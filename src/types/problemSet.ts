import { TProblemType } from './problem';

export interface IResult {
  userAnswer: string | number[] | undefined;
  score: number | undefined;
}

export interface IProblemSetDetail {
  problemId: string;
  moveNext: () => void;
  resultList?: Map<string, IResult>;
  pushResult: (problemId: string, result: IResult) => void;
}

export interface IProblemSetProblemsElement {
  id: number;
  type: TProblemType;
}

export interface IProblemSetDataElement {
  id: number;
  setTitle: string;
  problems: IProblemSetProblemsElement[];
}
