import { IButton } from '../types';
import { secondaryButtonStyle } from './style.css';

function SecondaryButton({ text }: IButton) {
  return (
    <button type="button" className={secondaryButtonStyle}>
      {text}
    </button>
  );
}
export default SecondaryButton;
