export interface IProblemListResponseData {
  id: number;
  title: string;
  tags: string[];
  avgScore: number;
  totalSolved: number;
}

export interface IProblemRequestParam {
  query?: string;
  tags?: string;
  isSolved?: boolean | null;
  page?: number;
  size?: number;
  type?: string;
}

export interface IProblemDetailResponseData {
  id: number;
  title: string;
  tags: string[];
  description: string;
  avgScore: number;
  topScore: number;
  bottomScore: number;
  totalSolved: number;
}
