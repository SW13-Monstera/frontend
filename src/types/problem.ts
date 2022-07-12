interface IProblem {
  id: number;
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

export type { IProblem, IProblemIdLinkState };
