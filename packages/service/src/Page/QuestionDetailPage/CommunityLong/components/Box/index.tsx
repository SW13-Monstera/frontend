import { boxStyle } from './style.css';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Box = ({ children, className }: Props) => {
  return <div className={`${boxStyle} ${className}`}>{children}</div>;
};

export default Box;
