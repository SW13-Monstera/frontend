import { IButton } from '../types';
import { mainButtonStyle } from './style.css';

function MainButton({ text }: IButton) {
  return (
    <button type="submit" className={mainButtonStyle}>
      {text}
    </button>
  );
}
export default MainButton;
