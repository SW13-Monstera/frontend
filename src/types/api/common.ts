export interface ICommonStats {
  problemCnt: number;
  gradableProblemCnt: number;
  userCnt: number;
}

export interface IRank {
  id: string;
  username: string;
  rank: number;
  score: number;
}

export interface IRankList {
  size: number;
  totalPage: number;
  currentPage: number;
  numberOfElements: number;
  contents: IRank[];
}
