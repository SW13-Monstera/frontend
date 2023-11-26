import { MouseEventHandler } from 'react';
import { iconButtonStyle } from './style.css';

type Props = {
  children: React.ReactNode;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const IconButton = ({ children, text, onClick }: Props) => {
  return (
    <button type='button' onClick={onClick} className={iconButtonStyle}>
      {children}
      <div>{text}</div>
    </button>
  );
};

export default IconButton;
