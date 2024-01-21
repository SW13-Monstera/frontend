import { IProblemListElement } from './../problem/api';

interface HeadCell {
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
}

interface ITableHead {
  id: string;
  name: string;
}

interface ICustomTable {
  headCells: readonly HeadCell[];
  getData: (page: number, params: any) => Promise<any>;
  filterState: IFilter[];
  tableHeads: any[];
}

interface IProblemTable extends ICustomTable {
  tableHeads: (keyof IProblemListElement)[];
}

interface IProblemCondition {
  id: string;
  title: string;
  description: string;
}

interface IFilter {
  condition: keyof IProblemCondition;
  value: string;
  id: number;
}

interface IChoice {
  id: string;
  value: string;
  isChecked: boolean;
}

export type {
  HeadCell,
  ITableHead,
  IFilter,
  IProblemCondition,
  IChoice,
  ICustomTable,
  IProblemTable,
};
