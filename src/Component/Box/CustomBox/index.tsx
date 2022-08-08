import { columnBoxStyle, rowBoxStyle } from './style.css';

interface IBox {
  children: JSX.Element | string;
}

export const RowBox = ({ children }: IBox) => {
  return <div className={rowBoxStyle}>{children}</div>;
};

export const ColumnBox = ({ children }: IBox) => {
  return <div className={columnBoxStyle}>{children}</div>;
};
