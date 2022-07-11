interface IProblem {
  id: number;
  title: string;
  numberSolved: number;
  averageScore: number;
  highestScore: number;
  lowestScore: number;
  tagList: string[];
  desc: string;
}

interface IProblemIdLinkState {
  problemId: number;
}

export type { IProblem, IProblemIdLinkState };
