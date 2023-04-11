import { IFilter, IProblemCondition } from '.';

export interface IFilterStateHandler {
  filterState: IFilter[];
  addFilter: () => void;
  deleteFilter: any;
  updateCondition: (newCondition: IProblemCondition, DOMId: string) => void;
  updateFilterValue: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface IPageHandler {
  page: number;
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number,
  ) => void;
}
