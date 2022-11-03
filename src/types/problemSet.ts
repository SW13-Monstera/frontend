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
