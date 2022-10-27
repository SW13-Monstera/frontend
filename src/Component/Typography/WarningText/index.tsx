import { IWarningText } from '../../../types/input';
import { displayNoneStyle, warningStyle } from './style.css';

interface IWarningTextList {
  isShown: boolean;
  warningList: IWarningText[];
}

export const WarningText = ({ isWarning, text }: IWarningText) => {
  return (
    <li>
      <p className={isWarning ? warningStyle['true'] : warningStyle['false']}>{text}</p>
    </li>
  );
};

export const WarningTextList = ({ isShown, warningList }: IWarningTextList) => {
  return (
    <ul className={isShown ? '' : displayNoneStyle}>
      {warningList.map((warningText) => (
        <WarningText isWarning={false} text={warningText.text} key={warningText.text} />
      ))}
    </ul>
  );
};
