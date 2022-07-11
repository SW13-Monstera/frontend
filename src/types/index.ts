interface IQuetionListElement {
  id: number;
  title: string;
  numberSolved: number;
  averageScore: number;
  tagList: string[];
}

interface IDropdownElement {
  id: string;
  name: string;
}

export type { IQuetionListElement, IDropdownElement };
