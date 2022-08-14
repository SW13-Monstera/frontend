import { columnBoxStyle, rowBoxStyle } from './style.css';

interface IBox {
  children: React.ReactNode;
  className?: string;
}

export const RowBox = ({ children, className }: IBox) => {
  return <div className={`${rowBoxStyle} ${className}`}>{children}</div>;
};

export const ColumnBox = ({ children, className }: IBox) => {
  return <div className={`${columnBoxStyle} ${className}`}>{children}</div>;
};
