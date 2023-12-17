import { IButton } from '../../../types/button';
import { floatingButtonStyle } from './style.css';

const FloatingButton = (props: IButton) => {
  return (
    <button
      type='button'
      className={floatingButtonStyle}
      onClick={props.onClick}
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseOut}
    >
      {props.children}
    </button>
  );
};
export default FloatingButton;
