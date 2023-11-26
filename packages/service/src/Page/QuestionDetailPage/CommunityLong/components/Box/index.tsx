import { boxStyle } from './style.css';

type Props = {
  children: React.ReactNode;
};

const Box = ({ children }: Props) => {
  return <div className={boxStyle}>{children}</div>;
};

export default Box;
