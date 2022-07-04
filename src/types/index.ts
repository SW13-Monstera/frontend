interface IQuetionListElement {
  id: number;
  title: string;
  numberSolved: number;
  averageScore: number;
  tag: string[];
}

interface IDropdownElement {
  id: string;
  name: string;
}

export type { IQuetionListElement, IDropdownElement };
