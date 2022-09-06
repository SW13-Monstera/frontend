import { warningMessageStyle } from './style.css';

interface IWarningMessage {
  children: string | React.ReactNode;
  isShown: boolean;
}

export const WarningMessage = ({ children, isShown }: IWarningMessage) => {
  return (
    <div className={warningMessageStyle} style={{ display: isShown ? 'block' : 'none' }}>
      {children}
    </div>
  );
};
