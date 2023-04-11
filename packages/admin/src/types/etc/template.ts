import { ReactElement } from 'react';
import { ITableHead } from '.';
import { IFilterStateHandler, IPageHandler } from './list';

export interface IListPageTemplate {
  title: string;
  tableHeads: ITableHead[];
  addUrl?: string;
  data: any;
  filterStateHandler: IFilterStateHandler;
  pageHandler: IPageHandler;
  handleRowClick: (id: string) => void;
  children?: ReactElement;
}
