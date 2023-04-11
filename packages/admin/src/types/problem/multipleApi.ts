
export interface IMultipleCreateRequest {
  title: string;
  description: string;
  tags: string[];
  choices: IChoiceElement[];
  score: number;
}

export interface IChoiceElement {
  content: string;
  isAnswer: boolean;
}

export interface IMultipleDetailResponseData {
  id: number;
  title: string;
  description: string;
  tags: string[];
  isMultiple: boolean;
  choiceData: IChoiceElement[];
  score: number;
  isActive: boolean;
  isGradable: boolean;
}

export interface IMultipleListResponseData {
  id: number;
  title: string;
  creator: string;
  answerRate: number | null;
  userAnswerCnt: number;
  isActive: boolean;
}

export interface IMultipleUpdateRequest extends IMultipleCreateRequest {
  isGradable?: boolean;
  isActive?: boolean;
  choiceData?: IChoiceElement[];
  isMultiple?: boolean;
  id?: number;
}

export interface IMultipleProblemListElement {
  id: number;
  title: string;
  creator: string;
  answerRate: number | null;
  userAnswerCnt: number;
  isActive: boolean;
}
