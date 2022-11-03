export interface IResult {
  userAnswer: string | number[] | undefined;
  score: number | undefined;
}

export interface IProblemSetDetail {
  problemId: string;
  moveNext: () => void;
  resultList?: IResult[];
  pushResult: (result: IResult) => void;
}
